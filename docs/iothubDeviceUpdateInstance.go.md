# `iothubDeviceUpdateInstance` Submodule <a name="`iothubDeviceUpdateInstance` Submodule" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubDeviceUpdateInstance <a name="IothubDeviceUpdateInstance" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance azurerm_iothub_device_update_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iothubdeviceupdateinstance"

iothubdeviceupdateinstance.NewIothubDeviceUpdateInstance(scope Construct, id *string, config IothubDeviceUpdateInstanceConfig) IothubDeviceUpdateInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig">IothubDeviceUpdateInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig">IothubDeviceUpdateInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putDiagnosticStorageAccount">PutDiagnosticStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetDiagnosticEnabled">ResetDiagnosticEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetDiagnosticStorageAccount">ResetDiagnosticStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutDiagnosticStorageAccount` <a name="PutDiagnosticStorageAccount" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putDiagnosticStorageAccount"></a>

```go
func PutDiagnosticStorageAccount(value IothubDeviceUpdateInstanceDiagnosticStorageAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putDiagnosticStorageAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putTimeouts"></a>

```go
func PutTimeouts(value IothubDeviceUpdateInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts">IothubDeviceUpdateInstanceTimeouts</a>

---

##### `ResetDiagnosticEnabled` <a name="ResetDiagnosticEnabled" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetDiagnosticEnabled"></a>

```go
func ResetDiagnosticEnabled()
```

##### `ResetDiagnosticStorageAccount` <a name="ResetDiagnosticStorageAccount" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetDiagnosticStorageAccount"></a>

```go
func ResetDiagnosticStorageAccount()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IothubDeviceUpdateInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iothubdeviceupdateinstance"

iothubdeviceupdateinstance.IothubDeviceUpdateInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iothubdeviceupdateinstance"

iothubdeviceupdateinstance.IothubDeviceUpdateInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iothubdeviceupdateinstance"

iothubdeviceupdateinstance.IothubDeviceUpdateInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iothubdeviceupdateinstance"

iothubdeviceupdateinstance.IothubDeviceUpdateInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IothubDeviceUpdateInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IothubDeviceUpdateInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IothubDeviceUpdateInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IothubDeviceUpdateInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticStorageAccount">DiagnosticStorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference">IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference">IothubDeviceUpdateInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.deviceUpdateAccountIdInput">DeviceUpdateAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticEnabledInput">DiagnosticEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticStorageAccountInput">DiagnosticStorageAccountInput</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.iothubIdInput">IothubIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.deviceUpdateAccountId">DeviceUpdateAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticEnabled">DiagnosticEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.iothubId">IothubId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DiagnosticStorageAccount`<sup>Required</sup> <a name="DiagnosticStorageAccount" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticStorageAccount"></a>

```go
func DiagnosticStorageAccount() IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference">IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.timeouts"></a>

```go
func Timeouts() IothubDeviceUpdateInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference">IothubDeviceUpdateInstanceTimeoutsOutputReference</a>

---

##### `DeviceUpdateAccountIdInput`<sup>Optional</sup> <a name="DeviceUpdateAccountIdInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.deviceUpdateAccountIdInput"></a>

```go
func DeviceUpdateAccountIdInput() *string
```

- *Type:* *string

---

##### `DiagnosticEnabledInput`<sup>Optional</sup> <a name="DiagnosticEnabledInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticEnabledInput"></a>

```go
func DiagnosticEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DiagnosticStorageAccountInput`<sup>Optional</sup> <a name="DiagnosticStorageAccountInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticStorageAccountInput"></a>

```go
func DiagnosticStorageAccountInput() IothubDeviceUpdateInstanceDiagnosticStorageAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IothubIdInput`<sup>Optional</sup> <a name="IothubIdInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.iothubIdInput"></a>

```go
func IothubIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceUpdateAccountId`<sup>Required</sup> <a name="DeviceUpdateAccountId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.deviceUpdateAccountId"></a>

```go
func DeviceUpdateAccountId() *string
```

- *Type:* *string

---

##### `DiagnosticEnabled`<sup>Required</sup> <a name="DiagnosticEnabled" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticEnabled"></a>

```go
func DiagnosticEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IothubId`<sup>Required</sup> <a name="IothubId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.iothubId"></a>

```go
func IothubId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IothubDeviceUpdateInstanceConfig <a name="IothubDeviceUpdateInstanceConfig" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iothubdeviceupdateinstance"

&iothubdeviceupdateinstance.IothubDeviceUpdateInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DeviceUpdateAccountId: *string,
	IothubId: *string,
	Name: *string,
	DiagnosticEnabled: interface{},
	DiagnosticStorageAccount: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.deviceUpdateAccountId">DeviceUpdateAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#device_update_account_id IothubDeviceUpdateInstance#device_update_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.iothubId">IothubId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#iothub_id IothubDeviceUpdateInstance#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#name IothubDeviceUpdateInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.diagnosticEnabled">DiagnosticEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#diagnostic_enabled IothubDeviceUpdateInstance#diagnostic_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.diagnosticStorageAccount">DiagnosticStorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a></code> | diagnostic_storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#id IothubDeviceUpdateInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#tags IothubDeviceUpdateInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts">IothubDeviceUpdateInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeviceUpdateAccountId`<sup>Required</sup> <a name="DeviceUpdateAccountId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.deviceUpdateAccountId"></a>

```go
DeviceUpdateAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#device_update_account_id IothubDeviceUpdateInstance#device_update_account_id}.

---

##### `IothubId`<sup>Required</sup> <a name="IothubId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.iothubId"></a>

```go
IothubId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#iothub_id IothubDeviceUpdateInstance#iothub_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#name IothubDeviceUpdateInstance#name}.

---

##### `DiagnosticEnabled`<sup>Optional</sup> <a name="DiagnosticEnabled" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.diagnosticEnabled"></a>

```go
DiagnosticEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#diagnostic_enabled IothubDeviceUpdateInstance#diagnostic_enabled}.

---

##### `DiagnosticStorageAccount`<sup>Optional</sup> <a name="DiagnosticStorageAccount" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.diagnosticStorageAccount"></a>

```go
DiagnosticStorageAccount IothubDeviceUpdateInstanceDiagnosticStorageAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a>

diagnostic_storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#diagnostic_storage_account IothubDeviceUpdateInstance#diagnostic_storage_account}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#id IothubDeviceUpdateInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#tags IothubDeviceUpdateInstance#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.timeouts"></a>

```go
Timeouts IothubDeviceUpdateInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts">IothubDeviceUpdateInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#timeouts IothubDeviceUpdateInstance#timeouts}

---

### IothubDeviceUpdateInstanceDiagnosticStorageAccount <a name="IothubDeviceUpdateInstanceDiagnosticStorageAccount" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iothubdeviceupdateinstance"

&iothubdeviceupdateinstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount {
	ConnectionString: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount.property.connectionString">ConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#connection_string IothubDeviceUpdateInstance#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#id IothubDeviceUpdateInstance#id}. |

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount.property.connectionString"></a>

```go
ConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#connection_string IothubDeviceUpdateInstance#connection_string}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#id IothubDeviceUpdateInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IothubDeviceUpdateInstanceTimeouts <a name="IothubDeviceUpdateInstanceTimeouts" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iothubdeviceupdateinstance"

&iothubdeviceupdateinstance.IothubDeviceUpdateInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#create IothubDeviceUpdateInstance#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#delete IothubDeviceUpdateInstance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#read IothubDeviceUpdateInstance#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#update IothubDeviceUpdateInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#create IothubDeviceUpdateInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#delete IothubDeviceUpdateInstance#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#read IothubDeviceUpdateInstance#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_device_update_instance#update IothubDeviceUpdateInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference <a name="IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iothubdeviceupdateinstance"

iothubdeviceupdateinstance.NewIothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.connectionStringInput">ConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.connectionStringInput"></a>

```go
func ConnectionStringInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() IothubDeviceUpdateInstanceDiagnosticStorageAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a>

---


### IothubDeviceUpdateInstanceTimeoutsOutputReference <a name="IothubDeviceUpdateInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iothubdeviceupdateinstance"

iothubdeviceupdateinstance.NewIothubDeviceUpdateInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IothubDeviceUpdateInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



