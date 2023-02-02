import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";

const imports = [MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatCardModule, MatCheckboxModule];

@NgModule({
	imports: [...imports],
	exports: [...imports],
	declarations: [],
	providers: []
})

export class MaterialModule {}