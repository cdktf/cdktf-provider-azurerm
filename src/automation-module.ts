// https://www.terraform.io/docs/providers/azurerm/r/automation_module.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_module.html#automation_account_name AutomationModule#automation_account_name}
  */
  readonly automationAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_module.html#name AutomationModule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_module.html#resource_group_name AutomationModule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * module_link block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_module.html#module_link AutomationModule#module_link}
  */
  readonly moduleLink: AutomationModuleModuleLink[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_module.html#timeouts AutomationModule#timeouts}
  */
  readonly timeouts?: AutomationModuleTimeouts;
}
export interface AutomationModuleModuleLinkHash {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_module.html#algorithm AutomationModule#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_module.html#value AutomationModule#value}
  */
  readonly value: string;
}

function automationModuleModuleLinkHashToTerraform(struct?: AutomationModuleModuleLinkHash): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AutomationModuleModuleLink {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_module.html#uri AutomationModule#uri}
  */
  readonly uri: string;
  /**
  * hash block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_module.html#hash AutomationModule#hash}
  */
  readonly hash?: AutomationModuleModuleLinkHash[];
}

function automationModuleModuleLinkToTerraform(struct?: AutomationModuleModuleLink): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
    hash: cdktf.listMapper(automationModuleModuleLinkHashToTerraform)(struct!.hash),
  }
}

export interface AutomationModuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_module.html#create AutomationModule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_module.html#delete AutomationModule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_module.html#read AutomationModule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_module.html#update AutomationModule#update}
  */
  readonly update?: string;
}

function automationModuleTimeoutsToTerraform(struct?: AutomationModuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/automation_module.html azurerm_automation_module}
*/
export class AutomationModule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_automation_module";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/automation_module.html azurerm_automation_module} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationModuleConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationModuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_module',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automationAccountName = config.automationAccountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._moduleLink = config.moduleLink;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation_account_name - computed: false, optional: false, required: true
  private _automationAccountName: string;
  public get automationAccountName() {
    return this.getStringAttribute('automation_account_name');
  }
  public set automationAccountName(value: string) {
    this._automationAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automationAccountNameInput() {
    return this._automationAccountName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // module_link - computed: false, optional: false, required: true
  private _moduleLink: AutomationModuleModuleLink[];
  public get moduleLink() {
    return this.interpolationForAttribute('module_link') as any;
  }
  public set moduleLink(value: AutomationModuleModuleLink[]) {
    this._moduleLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleLinkInput() {
    return this._moduleLink
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationModuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AutomationModuleTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automation_account_name: cdktf.stringToTerraform(this._automationAccountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      module_link: cdktf.listMapper(automationModuleModuleLinkToTerraform)(this._moduleLink),
      timeouts: automationModuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
