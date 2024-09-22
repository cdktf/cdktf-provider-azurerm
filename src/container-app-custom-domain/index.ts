// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_custom_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerAppCustomDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Binding type. Possible values include `Disabled` and `SniEnabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_custom_domain#certificate_binding_type ContainerAppCustomDomain#certificate_binding_type}
  */
  readonly certificateBindingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_custom_domain#container_app_environment_certificate_id ContainerAppCustomDomain#container_app_environment_certificate_id}
  */
  readonly containerAppEnvironmentCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_custom_domain#container_app_id ContainerAppCustomDomain#container_app_id}
  */
  readonly containerAppId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_custom_domain#id ContainerAppCustomDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The hostname of the Certificate. Must be the CN or a named SAN in the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_custom_domain#name ContainerAppCustomDomain#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_custom_domain#timeouts ContainerAppCustomDomain#timeouts}
  */
  readonly timeouts?: ContainerAppCustomDomainTimeouts;
}
export interface ContainerAppCustomDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_custom_domain#create ContainerAppCustomDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_custom_domain#delete ContainerAppCustomDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_custom_domain#read ContainerAppCustomDomain#read}
  */
  readonly read?: string;
}

export function containerAppCustomDomainTimeoutsToTerraform(struct?: ContainerAppCustomDomainTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function containerAppCustomDomainTimeoutsToHclTerraform(struct?: ContainerAppCustomDomainTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppCustomDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerAppCustomDomainTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppCustomDomainTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_custom_domain azurerm_container_app_custom_domain}
*/
export class ContainerAppCustomDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_container_app_custom_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerAppCustomDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerAppCustomDomain to import
  * @param importFromId The id of the existing ContainerAppCustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_custom_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerAppCustomDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_container_app_custom_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_custom_domain azurerm_container_app_custom_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerAppCustomDomainConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerAppCustomDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_app_custom_domain',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateBindingType = config.certificateBindingType;
    this._containerAppEnvironmentCertificateId = config.containerAppEnvironmentCertificateId;
    this._containerAppId = config.containerAppId;
    this._id = config.id;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_binding_type - computed: false, optional: true, required: false
  private _certificateBindingType?: string; 
  public get certificateBindingType() {
    return this.getStringAttribute('certificate_binding_type');
  }
  public set certificateBindingType(value: string) {
    this._certificateBindingType = value;
  }
  public resetCertificateBindingType() {
    this._certificateBindingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBindingTypeInput() {
    return this._certificateBindingType;
  }

  // container_app_environment_certificate_id - computed: false, optional: true, required: false
  private _containerAppEnvironmentCertificateId?: string; 
  public get containerAppEnvironmentCertificateId() {
    return this.getStringAttribute('container_app_environment_certificate_id');
  }
  public set containerAppEnvironmentCertificateId(value: string) {
    this._containerAppEnvironmentCertificateId = value;
  }
  public resetContainerAppEnvironmentCertificateId() {
    this._containerAppEnvironmentCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAppEnvironmentCertificateIdInput() {
    return this._containerAppEnvironmentCertificateId;
  }

  // container_app_environment_managed_certificate_id - computed: true, optional: false, required: false
  public get containerAppEnvironmentManagedCertificateId() {
    return this.getStringAttribute('container_app_environment_managed_certificate_id');
  }

  // container_app_id - computed: false, optional: false, required: true
  private _containerAppId?: string; 
  public get containerAppId() {
    return this.getStringAttribute('container_app_id');
  }
  public set containerAppId(value: string) {
    this._containerAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAppIdInput() {
    return this._containerAppId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._name;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerAppCustomDomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerAppCustomDomainTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_binding_type: cdktf.stringToTerraform(this._certificateBindingType),
      container_app_environment_certificate_id: cdktf.stringToTerraform(this._containerAppEnvironmentCertificateId),
      container_app_id: cdktf.stringToTerraform(this._containerAppId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      timeouts: containerAppCustomDomainTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_binding_type: {
        value: cdktf.stringToHclTerraform(this._certificateBindingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_app_environment_certificate_id: {
        value: cdktf.stringToHclTerraform(this._containerAppEnvironmentCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_app_id: {
        value: cdktf.stringToHclTerraform(this._containerAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: containerAppCustomDomainTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerAppCustomDomainTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
