# `maintenanceConfiguration` Submodule <a name="`maintenanceConfiguration` Submodule" id="@cdktf/provider-azurerm.maintenanceConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaintenanceConfiguration <a name="MaintenanceConfiguration" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration azurerm_maintenance_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

maintenanceconfiguration.NewMaintenanceConfiguration(scope Construct, id *string, config MaintenanceConfigurationConfig) MaintenanceConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig">MaintenanceConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig">MaintenanceConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putInstallPatches">PutInstallPatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putWindow">PutWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetInGuestUserPatchMode">ResetInGuestUserPatchMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetInstallPatches">ResetInstallPatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetVisibility">ResetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetWindow">ResetWindow</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutInstallPatches` <a name="PutInstallPatches" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putInstallPatches"></a>

```go
func PutInstallPatches(value MaintenanceConfigurationInstallPatches)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putInstallPatches.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value MaintenanceConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a>

---

##### `PutWindow` <a name="PutWindow" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putWindow"></a>

```go
func PutWindow(value MaintenanceConfigurationWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetInGuestUserPatchMode` <a name="ResetInGuestUserPatchMode" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetInGuestUserPatchMode"></a>

```go
func ResetInGuestUserPatchMode()
```

##### `ResetInstallPatches` <a name="ResetInstallPatches" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetInstallPatches"></a>

```go
func ResetInstallPatches()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetVisibility"></a>

```go
func ResetVisibility()
```

##### `ResetWindow` <a name="ResetWindow" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetWindow"></a>

```go
func ResetWindow()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

maintenanceconfiguration.MaintenanceConfiguration_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

maintenanceconfiguration.MaintenanceConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

maintenanceconfiguration.MaintenanceConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.installPatches">InstallPatches</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference">MaintenanceConfigurationInstallPatchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference">MaintenanceConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.window">Window</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference">MaintenanceConfigurationWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.inGuestUserPatchModeInput">InGuestUserPatchModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.installPatchesInput">InstallPatchesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.windowInput">WindowInput</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.inGuestUserPatchMode">InGuestUserPatchMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstallPatches`<sup>Required</sup> <a name="InstallPatches" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.installPatches"></a>

```go
func InstallPatches() MaintenanceConfigurationInstallPatchesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference">MaintenanceConfigurationInstallPatchesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.timeouts"></a>

```go
func Timeouts() MaintenanceConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference">MaintenanceConfigurationTimeoutsOutputReference</a>

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.window"></a>

```go
func Window() MaintenanceConfigurationWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference">MaintenanceConfigurationWindowOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InGuestUserPatchModeInput`<sup>Optional</sup> <a name="InGuestUserPatchModeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.inGuestUserPatchModeInput"></a>

```go
func InGuestUserPatchModeInput() *string
```

- *Type:* *string

---

##### `InstallPatchesInput`<sup>Optional</sup> <a name="InstallPatchesInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.installPatchesInput"></a>

```go
func InstallPatchesInput() MaintenanceConfigurationInstallPatches
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.windowInput"></a>

```go
func WindowInput() MaintenanceConfigurationWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InGuestUserPatchMode`<sup>Required</sup> <a name="InGuestUserPatchMode" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.inGuestUserPatchMode"></a>

```go
func InGuestUserPatchMode() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MaintenanceConfigurationConfig <a name="MaintenanceConfigurationConfig" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

&maintenanceconfiguration.MaintenanceConfigurationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Scope: *string,
	Id: *string,
	InGuestUserPatchMode: *string,
	InstallPatches: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6.maintenanceConfiguration.MaintenanceConfigurationInstallPatches,
	Properties: *map[string]*string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6.maintenanceConfiguration.MaintenanceConfigurationTimeouts,
	Visibility: *string,
	Window: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6.maintenanceConfiguration.MaintenanceConfigurationWindow,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#location MaintenanceConfiguration#location}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#name MaintenanceConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#resource_group_name MaintenanceConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#scope MaintenanceConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#id MaintenanceConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.inGuestUserPatchMode">InGuestUserPatchMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#in_guest_user_patch_mode MaintenanceConfiguration#in_guest_user_patch_mode}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.installPatches">InstallPatches</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a></code> | install_patches block. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#properties MaintenanceConfiguration#properties}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#tags MaintenanceConfiguration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.visibility">Visibility</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#visibility MaintenanceConfiguration#visibility}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.window">Window</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a></code> | window block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#location MaintenanceConfiguration#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#name MaintenanceConfiguration#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#resource_group_name MaintenanceConfiguration#resource_group_name}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#scope MaintenanceConfiguration#scope}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#id MaintenanceConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InGuestUserPatchMode`<sup>Optional</sup> <a name="InGuestUserPatchMode" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.inGuestUserPatchMode"></a>

```go
InGuestUserPatchMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#in_guest_user_patch_mode MaintenanceConfiguration#in_guest_user_patch_mode}.

---

##### `InstallPatches`<sup>Optional</sup> <a name="InstallPatches" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.installPatches"></a>

```go
InstallPatches MaintenanceConfigurationInstallPatches
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a>

install_patches block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#install_patches MaintenanceConfiguration#install_patches}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#properties MaintenanceConfiguration#properties}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#tags MaintenanceConfiguration#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.timeouts"></a>

```go
Timeouts MaintenanceConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#timeouts MaintenanceConfiguration#timeouts}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#visibility MaintenanceConfiguration#visibility}.

---

##### `Window`<sup>Optional</sup> <a name="Window" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.window"></a>

```go
Window MaintenanceConfigurationWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a>

window block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#window MaintenanceConfiguration#window}

---

### MaintenanceConfigurationInstallPatches <a name="MaintenanceConfigurationInstallPatches" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

&maintenanceconfiguration.MaintenanceConfigurationInstallPatches {
	Linux: interface{},
	Reboot: *string,
	Windows: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.linux">Linux</a></code> | <code>interface{}</code> | linux block. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.reboot">Reboot</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#reboot MaintenanceConfiguration#reboot}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.windows">Windows</a></code> | <code>interface{}</code> | windows block. |

---

##### `Linux`<sup>Optional</sup> <a name="Linux" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.linux"></a>

```go
Linux interface{}
```

- *Type:* interface{}

linux block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#linux MaintenanceConfiguration#linux}

---

##### `Reboot`<sup>Optional</sup> <a name="Reboot" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.reboot"></a>

```go
Reboot *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#reboot MaintenanceConfiguration#reboot}.

---

##### `Windows`<sup>Optional</sup> <a name="Windows" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.windows"></a>

```go
Windows interface{}
```

- *Type:* interface{}

windows block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#windows MaintenanceConfiguration#windows}

---

### MaintenanceConfigurationInstallPatchesLinux <a name="MaintenanceConfigurationInstallPatchesLinux" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

&maintenanceconfiguration.MaintenanceConfigurationInstallPatchesLinux {
	ClassificationsToInclude: *[]*string,
	PackageNamesMaskToExclude: *[]*string,
	PackageNamesMaskToInclude: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.classificationsToInclude">ClassificationsToInclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#classifications_to_include MaintenanceConfiguration#classifications_to_include}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.packageNamesMaskToExclude">PackageNamesMaskToExclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#package_names_mask_to_exclude MaintenanceConfiguration#package_names_mask_to_exclude}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.packageNamesMaskToInclude">PackageNamesMaskToInclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#package_names_mask_to_include MaintenanceConfiguration#package_names_mask_to_include}. |

---

##### `ClassificationsToInclude`<sup>Optional</sup> <a name="ClassificationsToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.classificationsToInclude"></a>

```go
ClassificationsToInclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#classifications_to_include MaintenanceConfiguration#classifications_to_include}.

---

##### `PackageNamesMaskToExclude`<sup>Optional</sup> <a name="PackageNamesMaskToExclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.packageNamesMaskToExclude"></a>

```go
PackageNamesMaskToExclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#package_names_mask_to_exclude MaintenanceConfiguration#package_names_mask_to_exclude}.

---

##### `PackageNamesMaskToInclude`<sup>Optional</sup> <a name="PackageNamesMaskToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.packageNamesMaskToInclude"></a>

```go
PackageNamesMaskToInclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#package_names_mask_to_include MaintenanceConfiguration#package_names_mask_to_include}.

---

### MaintenanceConfigurationInstallPatchesWindows <a name="MaintenanceConfigurationInstallPatchesWindows" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

&maintenanceconfiguration.MaintenanceConfigurationInstallPatchesWindows {
	ClassificationsToInclude: *[]*string,
	KbNumbersToExclude: *[]*string,
	KbNumbersToInclude: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.classificationsToInclude">ClassificationsToInclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#classifications_to_include MaintenanceConfiguration#classifications_to_include}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.kbNumbersToExclude">KbNumbersToExclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#kb_numbers_to_exclude MaintenanceConfiguration#kb_numbers_to_exclude}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.kbNumbersToInclude">KbNumbersToInclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#kb_numbers_to_include MaintenanceConfiguration#kb_numbers_to_include}. |

---

##### `ClassificationsToInclude`<sup>Optional</sup> <a name="ClassificationsToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.classificationsToInclude"></a>

```go
ClassificationsToInclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#classifications_to_include MaintenanceConfiguration#classifications_to_include}.

---

##### `KbNumbersToExclude`<sup>Optional</sup> <a name="KbNumbersToExclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.kbNumbersToExclude"></a>

```go
KbNumbersToExclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#kb_numbers_to_exclude MaintenanceConfiguration#kb_numbers_to_exclude}.

---

##### `KbNumbersToInclude`<sup>Optional</sup> <a name="KbNumbersToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.kbNumbersToInclude"></a>

```go
KbNumbersToInclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#kb_numbers_to_include MaintenanceConfiguration#kb_numbers_to_include}.

---

### MaintenanceConfigurationTimeouts <a name="MaintenanceConfigurationTimeouts" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

&maintenanceconfiguration.MaintenanceConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#create MaintenanceConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#delete MaintenanceConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#read MaintenanceConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#update MaintenanceConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#create MaintenanceConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#delete MaintenanceConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#read MaintenanceConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#update MaintenanceConfiguration#update}.

---

### MaintenanceConfigurationWindow <a name="MaintenanceConfigurationWindow" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

&maintenanceconfiguration.MaintenanceConfigurationWindow {
	StartDateTime: *string,
	TimeZone: *string,
	Duration: *string,
	ExpirationDateTime: *string,
	RecurEvery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.startDateTime">StartDateTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#start_date_time MaintenanceConfiguration#start_date_time}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#time_zone MaintenanceConfiguration#time_zone}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#duration MaintenanceConfiguration#duration}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.expirationDateTime">ExpirationDateTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#expiration_date_time MaintenanceConfiguration#expiration_date_time}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.recurEvery">RecurEvery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#recur_every MaintenanceConfiguration#recur_every}. |

---

##### `StartDateTime`<sup>Required</sup> <a name="StartDateTime" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.startDateTime"></a>

```go
StartDateTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#start_date_time MaintenanceConfiguration#start_date_time}.

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#time_zone MaintenanceConfiguration#time_zone}.

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#duration MaintenanceConfiguration#duration}.

---

##### `ExpirationDateTime`<sup>Optional</sup> <a name="ExpirationDateTime" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.expirationDateTime"></a>

```go
ExpirationDateTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#expiration_date_time MaintenanceConfiguration#expiration_date_time}.

---

##### `RecurEvery`<sup>Optional</sup> <a name="RecurEvery" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.recurEvery"></a>

```go
RecurEvery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/maintenance_configuration#recur_every MaintenanceConfiguration#recur_every}.

---

## Classes <a name="Classes" id="Classes"></a>

### MaintenanceConfigurationInstallPatchesLinuxList <a name="MaintenanceConfigurationInstallPatchesLinuxList" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

maintenanceconfiguration.NewMaintenanceConfigurationInstallPatchesLinuxList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MaintenanceConfigurationInstallPatchesLinuxList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.get"></a>

```go
func Get(index *f64) MaintenanceConfigurationInstallPatchesLinuxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MaintenanceConfigurationInstallPatchesLinuxOutputReference <a name="MaintenanceConfigurationInstallPatchesLinuxOutputReference" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

maintenanceconfiguration.NewMaintenanceConfigurationInstallPatchesLinuxOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MaintenanceConfigurationInstallPatchesLinuxOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetClassificationsToInclude">ResetClassificationsToInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetPackageNamesMaskToExclude">ResetPackageNamesMaskToExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetPackageNamesMaskToInclude">ResetPackageNamesMaskToInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassificationsToInclude` <a name="ResetClassificationsToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetClassificationsToInclude"></a>

```go
func ResetClassificationsToInclude()
```

##### `ResetPackageNamesMaskToExclude` <a name="ResetPackageNamesMaskToExclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetPackageNamesMaskToExclude"></a>

```go
func ResetPackageNamesMaskToExclude()
```

##### `ResetPackageNamesMaskToInclude` <a name="ResetPackageNamesMaskToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetPackageNamesMaskToInclude"></a>

```go
func ResetPackageNamesMaskToInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.classificationsToIncludeInput">ClassificationsToIncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToExcludeInput">PackageNamesMaskToExcludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToIncludeInput">PackageNamesMaskToIncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.classificationsToInclude">ClassificationsToInclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToExclude">PackageNamesMaskToExclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToInclude">PackageNamesMaskToInclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassificationsToIncludeInput`<sup>Optional</sup> <a name="ClassificationsToIncludeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.classificationsToIncludeInput"></a>

```go
func ClassificationsToIncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `PackageNamesMaskToExcludeInput`<sup>Optional</sup> <a name="PackageNamesMaskToExcludeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToExcludeInput"></a>

```go
func PackageNamesMaskToExcludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `PackageNamesMaskToIncludeInput`<sup>Optional</sup> <a name="PackageNamesMaskToIncludeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToIncludeInput"></a>

```go
func PackageNamesMaskToIncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClassificationsToInclude`<sup>Required</sup> <a name="ClassificationsToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.classificationsToInclude"></a>

```go
func ClassificationsToInclude() *[]*string
```

- *Type:* *[]*string

---

##### `PackageNamesMaskToExclude`<sup>Required</sup> <a name="PackageNamesMaskToExclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToExclude"></a>

```go
func PackageNamesMaskToExclude() *[]*string
```

- *Type:* *[]*string

---

##### `PackageNamesMaskToInclude`<sup>Required</sup> <a name="PackageNamesMaskToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToInclude"></a>

```go
func PackageNamesMaskToInclude() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MaintenanceConfigurationInstallPatchesOutputReference <a name="MaintenanceConfigurationInstallPatchesOutputReference" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

maintenanceconfiguration.NewMaintenanceConfigurationInstallPatchesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MaintenanceConfigurationInstallPatchesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putLinux">PutLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putWindows">PutWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetLinux">ResetLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetReboot">ResetReboot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetWindows">ResetWindows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinux` <a name="PutLinux" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putLinux"></a>

```go
func PutLinux(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putLinux.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWindows` <a name="PutWindows" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putWindows"></a>

```go
func PutWindows(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putWindows.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLinux` <a name="ResetLinux" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetLinux"></a>

```go
func ResetLinux()
```

##### `ResetReboot` <a name="ResetReboot" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetReboot"></a>

```go
func ResetReboot()
```

##### `ResetWindows` <a name="ResetWindows" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetWindows"></a>

```go
func ResetWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.linux">Linux</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList">MaintenanceConfigurationInstallPatchesLinuxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.windows">Windows</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList">MaintenanceConfigurationInstallPatchesWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.linuxInput">LinuxInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.rebootInput">RebootInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.windowsInput">WindowsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.reboot">Reboot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Linux`<sup>Required</sup> <a name="Linux" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.linux"></a>

```go
func Linux() MaintenanceConfigurationInstallPatchesLinuxList
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList">MaintenanceConfigurationInstallPatchesLinuxList</a>

---

##### `Windows`<sup>Required</sup> <a name="Windows" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.windows"></a>

```go
func Windows() MaintenanceConfigurationInstallPatchesWindowsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList">MaintenanceConfigurationInstallPatchesWindowsList</a>

---

##### `LinuxInput`<sup>Optional</sup> <a name="LinuxInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.linuxInput"></a>

```go
func LinuxInput() interface{}
```

- *Type:* interface{}

---

##### `RebootInput`<sup>Optional</sup> <a name="RebootInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.rebootInput"></a>

```go
func RebootInput() *string
```

- *Type:* *string

---

##### `WindowsInput`<sup>Optional</sup> <a name="WindowsInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.windowsInput"></a>

```go
func WindowsInput() interface{}
```

- *Type:* interface{}

---

##### `Reboot`<sup>Required</sup> <a name="Reboot" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.reboot"></a>

```go
func Reboot() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.internalValue"></a>

```go
func InternalValue() MaintenanceConfigurationInstallPatches
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a>

---


### MaintenanceConfigurationInstallPatchesWindowsList <a name="MaintenanceConfigurationInstallPatchesWindowsList" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

maintenanceconfiguration.NewMaintenanceConfigurationInstallPatchesWindowsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MaintenanceConfigurationInstallPatchesWindowsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.get"></a>

```go
func Get(index *f64) MaintenanceConfigurationInstallPatchesWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MaintenanceConfigurationInstallPatchesWindowsOutputReference <a name="MaintenanceConfigurationInstallPatchesWindowsOutputReference" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

maintenanceconfiguration.NewMaintenanceConfigurationInstallPatchesWindowsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MaintenanceConfigurationInstallPatchesWindowsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetClassificationsToInclude">ResetClassificationsToInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetKbNumbersToExclude">ResetKbNumbersToExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetKbNumbersToInclude">ResetKbNumbersToInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassificationsToInclude` <a name="ResetClassificationsToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetClassificationsToInclude"></a>

```go
func ResetClassificationsToInclude()
```

##### `ResetKbNumbersToExclude` <a name="ResetKbNumbersToExclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetKbNumbersToExclude"></a>

```go
func ResetKbNumbersToExclude()
```

##### `ResetKbNumbersToInclude` <a name="ResetKbNumbersToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetKbNumbersToInclude"></a>

```go
func ResetKbNumbersToInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.classificationsToIncludeInput">ClassificationsToIncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToExcludeInput">KbNumbersToExcludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToIncludeInput">KbNumbersToIncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.classificationsToInclude">ClassificationsToInclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToExclude">KbNumbersToExclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToInclude">KbNumbersToInclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassificationsToIncludeInput`<sup>Optional</sup> <a name="ClassificationsToIncludeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.classificationsToIncludeInput"></a>

```go
func ClassificationsToIncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `KbNumbersToExcludeInput`<sup>Optional</sup> <a name="KbNumbersToExcludeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToExcludeInput"></a>

```go
func KbNumbersToExcludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `KbNumbersToIncludeInput`<sup>Optional</sup> <a name="KbNumbersToIncludeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToIncludeInput"></a>

```go
func KbNumbersToIncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClassificationsToInclude`<sup>Required</sup> <a name="ClassificationsToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.classificationsToInclude"></a>

```go
func ClassificationsToInclude() *[]*string
```

- *Type:* *[]*string

---

##### `KbNumbersToExclude`<sup>Required</sup> <a name="KbNumbersToExclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToExclude"></a>

```go
func KbNumbersToExclude() *[]*string
```

- *Type:* *[]*string

---

##### `KbNumbersToInclude`<sup>Required</sup> <a name="KbNumbersToInclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToInclude"></a>

```go
func KbNumbersToInclude() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MaintenanceConfigurationTimeoutsOutputReference <a name="MaintenanceConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

maintenanceconfiguration.NewMaintenanceConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MaintenanceConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MaintenanceConfigurationWindowOutputReference <a name="MaintenanceConfigurationWindowOutputReference" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/maintenanceconfiguration"

maintenanceconfiguration.NewMaintenanceConfigurationWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MaintenanceConfigurationWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetExpirationDateTime">ResetExpirationDateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetRecurEvery">ResetRecurEvery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetExpirationDateTime` <a name="ResetExpirationDateTime" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetExpirationDateTime"></a>

```go
func ResetExpirationDateTime()
```

##### `ResetRecurEvery` <a name="ResetRecurEvery" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetRecurEvery"></a>

```go
func ResetRecurEvery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.expirationDateTimeInput">ExpirationDateTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.recurEveryInput">RecurEveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.startDateTimeInput">StartDateTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.expirationDateTime">ExpirationDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.recurEvery">RecurEvery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.startDateTime">StartDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `ExpirationDateTimeInput`<sup>Optional</sup> <a name="ExpirationDateTimeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.expirationDateTimeInput"></a>

```go
func ExpirationDateTimeInput() *string
```

- *Type:* *string

---

##### `RecurEveryInput`<sup>Optional</sup> <a name="RecurEveryInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.recurEveryInput"></a>

```go
func RecurEveryInput() *string
```

- *Type:* *string

---

##### `StartDateTimeInput`<sup>Optional</sup> <a name="StartDateTimeInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.startDateTimeInput"></a>

```go
func StartDateTimeInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `ExpirationDateTime`<sup>Required</sup> <a name="ExpirationDateTime" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.expirationDateTime"></a>

```go
func ExpirationDateTime() *string
```

- *Type:* *string

---

##### `RecurEvery`<sup>Required</sup> <a name="RecurEvery" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.recurEvery"></a>

```go
func RecurEvery() *string
```

- *Type:* *string

---

##### `StartDateTime`<sup>Required</sup> <a name="StartDateTime" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.startDateTime"></a>

```go
func StartDateTime() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() MaintenanceConfigurationWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a>

---



