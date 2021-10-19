// https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortalTenantConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html#private_markdown_storage_enforced PortalTenantConfiguration#private_markdown_storage_enforced}
  */
  readonly privateMarkdownStorageEnforced: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html#timeouts PortalTenantConfiguration#timeouts}
  */
  readonly timeouts?: PortalTenantConfigurationTimeouts;
}
export interface PortalTenantConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html#create PortalTenantConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html#delete PortalTenantConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html#read PortalTenantConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html#update PortalTenantConfiguration#update}
  */
  readonly update?: string;
}

function portalTenantConfigurationTimeoutsToTerraform(struct?: PortalTenantConfigurationTimeoutsOutputReference | PortalTenantConfigurationTimeouts): any {
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

export class PortalTenantConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html azurerm_portal_tenant_configuration}
*/
export class PortalTenantConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_portal_tenant_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html azurerm_portal_tenant_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortalTenantConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: PortalTenantConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_portal_tenant_configuration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._privateMarkdownStorageEnforced = config.privateMarkdownStorageEnforced;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_markdown_storage_enforced - computed: false, optional: false, required: true
  private _privateMarkdownStorageEnforced?: boolean | cdktf.IResolvable; 
  public get privateMarkdownStorageEnforced() {
    return this.getBooleanAttribute('private_markdown_storage_enforced') as any;
  }
  public set privateMarkdownStorageEnforced(value: boolean | cdktf.IResolvable) {
    this._privateMarkdownStorageEnforced = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateMarkdownStorageEnforcedInput() {
    return this._privateMarkdownStorageEnforced
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PortalTenantConfigurationTimeouts | undefined; 
  private __timeoutsOutput = new PortalTenantConfigurationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: PortalTenantConfigurationTimeouts | undefined) {
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
      private_markdown_storage_enforced: cdktf.booleanToTerraform(this._privateMarkdownStorageEnforced),
      timeouts: portalTenantConfigurationTimeoutsToTerraform(this._timeouts),
    };
  }
}
