// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_pack_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudBuildPackBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_pack_binding#binding_type SpringCloudBuildPackBinding#binding_type}
  */
  readonly bindingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_pack_binding#id SpringCloudBuildPackBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_pack_binding#name SpringCloudBuildPackBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_pack_binding#spring_cloud_builder_id SpringCloudBuildPackBinding#spring_cloud_builder_id}
  */
  readonly springCloudBuilderId: string;
  /**
  * launch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_pack_binding#launch SpringCloudBuildPackBinding#launch}
  */
  readonly launch?: SpringCloudBuildPackBindingLaunch;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_pack_binding#timeouts SpringCloudBuildPackBinding#timeouts}
  */
  readonly timeouts?: SpringCloudBuildPackBindingTimeouts;
}
export interface SpringCloudBuildPackBindingLaunch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_pack_binding#properties SpringCloudBuildPackBinding#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_pack_binding#secrets SpringCloudBuildPackBinding#secrets}
  */
  readonly secrets?: { [key: string]: string };
}

export function springCloudBuildPackBindingLaunchToTerraform(struct?: SpringCloudBuildPackBindingLaunchOutputReference | SpringCloudBuildPackBindingLaunch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    secrets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.secrets),
  }
}


export function springCloudBuildPackBindingLaunchToHclTerraform(struct?: SpringCloudBuildPackBindingLaunchOutputReference | SpringCloudBuildPackBindingLaunch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secrets: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.secrets),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudBuildPackBindingLaunchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudBuildPackBindingLaunch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudBuildPackBindingLaunch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._properties = undefined;
      this._secrets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._properties = value.properties;
      this._secrets = value.secrets;
    }
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: { [key: string]: string }; 
  public get secrets() {
    return this.getStringMapAttribute('secrets');
  }
  public set secrets(value: { [key: string]: string }) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }
}
export interface SpringCloudBuildPackBindingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_pack_binding#create SpringCloudBuildPackBinding#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_pack_binding#delete SpringCloudBuildPackBinding#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_pack_binding#read SpringCloudBuildPackBinding#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_pack_binding#update SpringCloudBuildPackBinding#update}
  */
  readonly update?: string;
}

export function springCloudBuildPackBindingTimeoutsToTerraform(struct?: SpringCloudBuildPackBindingTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function springCloudBuildPackBindingTimeoutsToHclTerraform(struct?: SpringCloudBuildPackBindingTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudBuildPackBindingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpringCloudBuildPackBindingTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudBuildPackBindingTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_pack_binding azurerm_spring_cloud_build_pack_binding}
*/
export class SpringCloudBuildPackBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_spring_cloud_build_pack_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpringCloudBuildPackBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpringCloudBuildPackBinding to import
  * @param importFromId The id of the existing SpringCloudBuildPackBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_pack_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpringCloudBuildPackBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_spring_cloud_build_pack_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_build_pack_binding azurerm_spring_cloud_build_pack_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudBuildPackBindingConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudBuildPackBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_build_pack_binding',
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
    this._bindingType = config.bindingType;
    this._id = config.id;
    this._name = config.name;
    this._springCloudBuilderId = config.springCloudBuilderId;
    this._launch.internalValue = config.launch;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binding_type - computed: false, optional: true, required: false
  private _bindingType?: string; 
  public get bindingType() {
    return this.getStringAttribute('binding_type');
  }
  public set bindingType(value: string) {
    this._bindingType = value;
  }
  public resetBindingType() {
    this._bindingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingTypeInput() {
    return this._bindingType;
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

  // spring_cloud_builder_id - computed: false, optional: false, required: true
  private _springCloudBuilderId?: string; 
  public get springCloudBuilderId() {
    return this.getStringAttribute('spring_cloud_builder_id');
  }
  public set springCloudBuilderId(value: string) {
    this._springCloudBuilderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get springCloudBuilderIdInput() {
    return this._springCloudBuilderId;
  }

  // launch - computed: false, optional: true, required: false
  private _launch = new SpringCloudBuildPackBindingLaunchOutputReference(this, "launch");
  public get launch() {
    return this._launch;
  }
  public putLaunch(value: SpringCloudBuildPackBindingLaunch) {
    this._launch.internalValue = value;
  }
  public resetLaunch() {
    this._launch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchInput() {
    return this._launch.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SpringCloudBuildPackBindingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SpringCloudBuildPackBindingTimeouts) {
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
      binding_type: cdktf.stringToTerraform(this._bindingType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      spring_cloud_builder_id: cdktf.stringToTerraform(this._springCloudBuilderId),
      launch: springCloudBuildPackBindingLaunchToTerraform(this._launch.internalValue),
      timeouts: springCloudBuildPackBindingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binding_type: {
        value: cdktf.stringToHclTerraform(this._bindingType),
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
      spring_cloud_builder_id: {
        value: cdktf.stringToHclTerraform(this._springCloudBuilderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch: {
        value: springCloudBuildPackBindingLaunchToHclTerraform(this._launch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudBuildPackBindingLaunchList",
      },
      timeouts: {
        value: springCloudBuildPackBindingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpringCloudBuildPackBindingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
