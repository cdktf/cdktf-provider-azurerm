// https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_assembly.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppIntegrationAccountAssemblyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_assembly.html#assembly_name LogicAppIntegrationAccountAssembly#assembly_name}
  */
  readonly assemblyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_assembly.html#assembly_version LogicAppIntegrationAccountAssembly#assembly_version}
  */
  readonly assemblyVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_assembly.html#content LogicAppIntegrationAccountAssembly#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_assembly.html#content_link_uri LogicAppIntegrationAccountAssembly#content_link_uri}
  */
  readonly contentLinkUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_assembly.html#integration_account_name LogicAppIntegrationAccountAssembly#integration_account_name}
  */
  readonly integrationAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_assembly.html#metadata LogicAppIntegrationAccountAssembly#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_assembly.html#name LogicAppIntegrationAccountAssembly#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_assembly.html#resource_group_name LogicAppIntegrationAccountAssembly#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_assembly.html#timeouts LogicAppIntegrationAccountAssembly#timeouts}
  */
  readonly timeouts?: LogicAppIntegrationAccountAssemblyTimeouts;
}
export interface LogicAppIntegrationAccountAssemblyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_assembly.html#create LogicAppIntegrationAccountAssembly#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_assembly.html#delete LogicAppIntegrationAccountAssembly#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_assembly.html#read LogicAppIntegrationAccountAssembly#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_assembly.html#update LogicAppIntegrationAccountAssembly#update}
  */
  readonly update?: string;
}

function logicAppIntegrationAccountAssemblyTimeoutsToTerraform(struct?: LogicAppIntegrationAccountAssemblyTimeoutsOutputReference | LogicAppIntegrationAccountAssemblyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class LogicAppIntegrationAccountAssemblyTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_assembly.html azurerm_logic_app_integration_account_assembly}
*/
export class LogicAppIntegrationAccountAssembly extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_logic_app_integration_account_assembly";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_assembly.html azurerm_logic_app_integration_account_assembly} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicAppIntegrationAccountAssemblyConfig
  */
  public constructor(scope: Construct, id: string, config: LogicAppIntegrationAccountAssemblyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_integration_account_assembly',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._assemblyName = config.assemblyName;
    this._assemblyVersion = config.assemblyVersion;
    this._content = config.content;
    this._contentLinkUri = config.contentLinkUri;
    this._integrationAccountName = config.integrationAccountName;
    this._metadata = config.metadata;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assembly_name - computed: false, optional: false, required: true
  private _assemblyName?: string; 
  public get assemblyName() {
    return this.getStringAttribute('assembly_name');
  }
  public set assemblyName(value: string) {
    this._assemblyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assemblyNameInput() {
    return this._assemblyName
  }

  // assembly_version - computed: false, optional: true, required: false
  private _assemblyVersion?: string | undefined; 
  public get assemblyVersion() {
    return this.getStringAttribute('assembly_version');
  }
  public set assemblyVersion(value: string | undefined) {
    this._assemblyVersion = value;
  }
  public resetAssemblyVersion() {
    this._assemblyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assemblyVersionInput() {
    return this._assemblyVersion
  }

  // content - computed: false, optional: true, required: false
  private _content?: string | undefined; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string | undefined) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // content_link_uri - computed: false, optional: true, required: false
  private _contentLinkUri?: string | undefined; 
  public get contentLinkUri() {
    return this.getStringAttribute('content_link_uri');
  }
  public set contentLinkUri(value: string | undefined) {
    this._contentLinkUri = value;
  }
  public resetContentLinkUri() {
    this._contentLinkUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLinkUriInput() {
    return this._contentLinkUri
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_account_name - computed: false, optional: false, required: true
  private _integrationAccountName?: string; 
  public get integrationAccountName() {
    return this.getStringAttribute('integration_account_name');
  }
  public set integrationAccountName(value: string) {
    this._integrationAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationAccountNameInput() {
    return this._integrationAccountName
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
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
  private _resourceGroupName?: string; 
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogicAppIntegrationAccountAssemblyTimeouts | undefined; 
  private __timeoutsOutput = new LogicAppIntegrationAccountAssemblyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LogicAppIntegrationAccountAssemblyTimeouts | undefined) {
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
      assembly_name: cdktf.stringToTerraform(this._assemblyName),
      assembly_version: cdktf.stringToTerraform(this._assemblyVersion),
      content: cdktf.stringToTerraform(this._content),
      content_link_uri: cdktf.stringToTerraform(this._contentLinkUri),
      integration_account_name: cdktf.stringToTerraform(this._integrationAccountName),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: logicAppIntegrationAccountAssemblyTimeoutsToTerraform(this._timeouts),
    };
  }
}
