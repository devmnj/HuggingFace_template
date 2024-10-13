import { HfInference } from "@huggingface/inference";

const HF_TOKEN = "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";

const hf = new HfInference(HF_TOKEN);
 
const prompt ="Ford vs Ferrari director"
const res= await hf.textGeneration({
  model:"mistralai/Mixtral-8x7B-Instruct-v0.1", inputs:prompt 
})


console.log(res);