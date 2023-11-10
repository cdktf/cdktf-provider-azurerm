# `azurerm_iot_security_device_group`

Refer to the Terraform Registory for docs: [`azurerm_iot_security_device_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group).

# `iotSecurityDeviceGroup` Submodule <a name="`iotSecurityDeviceGroup` Submodule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotSecurityDeviceGroup <a name="IotSecurityDeviceGroup" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group azurerm_iot_security_device_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/iotsecuritydevicegroup"

iotsecuritydevicegroup.NewIotSecurityDeviceGroup(scope Construct, id *string, config IotSecurityDeviceGroupConfig) IotSecurityDeviceGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig">IotSecurityDeviceGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig">IotSecurityDeviceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putAllowRule">PutAllowRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putRangeRule">PutRangeRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetAllowRule">ResetAllowRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetRangeRule">ResetRangeRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutAllowRule` <a name="PutAllowRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putAllowRule"></a>

```go
func PutAllowRule(value IotSecurityDeviceGroupAllowRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putAllowRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a>

---

##### `PutRangeRule` <a name="PutRangeRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putRangeRule"></a>

```go
func PutRangeRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putRangeRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putTimeouts"></a>

```go
func PutTimeouts(value IotSecurityDeviceGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a>

---

##### `ResetAllowRule` <a name="ResetAllowRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetAllowRule"></a>

```go
func ResetAllowRule()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetRangeRule` <a name="ResetRangeRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetRangeRule"></a>

```go
func ResetRangeRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IotSecurityDeviceGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/iotsecuritydevicegroup"

iotsecuritydevicegroup.IotSecurityDeviceGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/iotsecuritydevicegroup"

iotsecuritydevicegroup.IotSecurityDeviceGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/iotsecuritydevicegroup"

iotsecuritydevicegroup.IotSecurityDeviceGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/iotsecuritydevicegroup"

iotsecuritydevicegroup.IotSecurityDeviceGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IotSecurityDeviceGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotSecurityDeviceGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotSecurityDeviceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IotSecurityDeviceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.allowRule">AllowRule</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference">IotSecurityDeviceGroupAllowRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.rangeRule">RangeRule</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList">IotSecurityDeviceGroupRangeRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference">IotSecurityDeviceGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.allowRuleInput">AllowRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.iothubIdInput">IothubIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.rangeRuleInput">RangeRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.iothubId">IothubId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowRule`<sup>Required</sup> <a name="AllowRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.allowRule"></a>

```go
func AllowRule() IotSecurityDeviceGroupAllowRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference">IotSecurityDeviceGroupAllowRuleOutputReference</a>

---

##### `RangeRule`<sup>Required</sup> <a name="RangeRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.rangeRule"></a>

```go
func RangeRule() IotSecurityDeviceGroupRangeRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList">IotSecurityDeviceGroupRangeRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.timeouts"></a>

```go
func Timeouts() IotSecurityDeviceGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference">IotSecurityDeviceGroupTimeoutsOutputReference</a>

---

##### `AllowRuleInput`<sup>Optional</sup> <a name="AllowRuleInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.allowRuleInput"></a>

```go
func AllowRuleInput() IotSecurityDeviceGroupAllowRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IothubIdInput`<sup>Optional</sup> <a name="IothubIdInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.iothubIdInput"></a>

```go
func IothubIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RangeRuleInput`<sup>Optional</sup> <a name="RangeRuleInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.rangeRuleInput"></a>

```go
func RangeRuleInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IothubId`<sup>Required</sup> <a name="IothubId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.iothubId"></a>

```go
func IothubId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotSecurityDeviceGroupAllowRule <a name="IotSecurityDeviceGroupAllowRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/iotsecuritydevicegroup"

&iotsecuritydevicegroup.IotSecurityDeviceGroupAllowRule {
	ConnectionFromIpsNotAllowed: *[]*string,
	ConnectionToIpsNotAllowed: *[]*string,
	LocalUsersNotAllowed: *[]*string,
	ProcessesNotAllowed: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.connectionFromIpsNotAllowed">ConnectionFromIpsNotAllowed</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#connection_from_ips_not_allowed IotSecurityDeviceGroup#connection_from_ips_not_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.connectionToIpsNotAllowed">ConnectionToIpsNotAllowed</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#connection_to_ips_not_allowed IotSecurityDeviceGroup#connection_to_ips_not_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.localUsersNotAllowed">LocalUsersNotAllowed</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#local_users_not_allowed IotSecurityDeviceGroup#local_users_not_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.processesNotAllowed">ProcessesNotAllowed</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#processes_not_allowed IotSecurityDeviceGroup#processes_not_allowed}. |

---

##### `ConnectionFromIpsNotAllowed`<sup>Optional</sup> <a name="ConnectionFromIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.connectionFromIpsNotAllowed"></a>

```go
ConnectionFromIpsNotAllowed *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#connection_from_ips_not_allowed IotSecurityDeviceGroup#connection_from_ips_not_allowed}.

---

##### `ConnectionToIpsNotAllowed`<sup>Optional</sup> <a name="ConnectionToIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.connectionToIpsNotAllowed"></a>

```go
ConnectionToIpsNotAllowed *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#connection_to_ips_not_allowed IotSecurityDeviceGroup#connection_to_ips_not_allowed}.

---

##### `LocalUsersNotAllowed`<sup>Optional</sup> <a name="LocalUsersNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.localUsersNotAllowed"></a>

```go
LocalUsersNotAllowed *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#local_users_not_allowed IotSecurityDeviceGroup#local_users_not_allowed}.

---

##### `ProcessesNotAllowed`<sup>Optional</sup> <a name="ProcessesNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.processesNotAllowed"></a>

```go
ProcessesNotAllowed *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#processes_not_allowed IotSecurityDeviceGroup#processes_not_allowed}.

---

### IotSecurityDeviceGroupConfig <a name="IotSecurityDeviceGroupConfig" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/iotsecuritydevicegroup"

&iotsecuritydevicegroup.IotSecurityDeviceGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IothubId: *string,
	Name: *string,
	AllowRule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule,
	Id: *string,
	RangeRule: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.iothubId">IothubId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#iothub_id IotSecurityDeviceGroup#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#name IotSecurityDeviceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.allowRule">AllowRule</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a></code> | allow_rule block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#id IotSecurityDeviceGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.rangeRule">RangeRule</a></code> | <code>interface{}</code> | range_rule block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IothubId`<sup>Required</sup> <a name="IothubId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.iothubId"></a>

```go
IothubId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#iothub_id IotSecurityDeviceGroup#iothub_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#name IotSecurityDeviceGroup#name}.

---

##### `AllowRule`<sup>Optional</sup> <a name="AllowRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.allowRule"></a>

```go
AllowRule IotSecurityDeviceGroupAllowRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a>

allow_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#allow_rule IotSecurityDeviceGroup#allow_rule}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#id IotSecurityDeviceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RangeRule`<sup>Optional</sup> <a name="RangeRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.rangeRule"></a>

```go
RangeRule interface{}
```

- *Type:* interface{}

range_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#range_rule IotSecurityDeviceGroup#range_rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.timeouts"></a>

```go
Timeouts IotSecurityDeviceGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#timeouts IotSecurityDeviceGroup#timeouts}

---

### IotSecurityDeviceGroupRangeRule <a name="IotSecurityDeviceGroupRangeRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/iotsecuritydevicegroup"

&iotsecuritydevicegroup.IotSecurityDeviceGroupRangeRule {
	Duration: *string,
	Max: *f64,
	Min: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#duration IotSecurityDeviceGroup#duration}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#max IotSecurityDeviceGroup#max}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#min IotSecurityDeviceGroup#min}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#type IotSecurityDeviceGroup#type}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#duration IotSecurityDeviceGroup#duration}.

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#max IotSecurityDeviceGroup#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#min IotSecurityDeviceGroup#min}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#type IotSecurityDeviceGroup#type}.

---

### IotSecurityDeviceGroupTimeouts <a name="IotSecurityDeviceGroupTimeouts" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/iotsecuritydevicegroup"

&iotsecuritydevicegroup.IotSecurityDeviceGroupTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#create IotSecurityDeviceGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#delete IotSecurityDeviceGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#read IotSecurityDeviceGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#update IotSecurityDeviceGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#create IotSecurityDeviceGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#delete IotSecurityDeviceGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#read IotSecurityDeviceGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.80.0/docs/resources/iot_security_device_group#update IotSecurityDeviceGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotSecurityDeviceGroupAllowRuleOutputReference <a name="IotSecurityDeviceGroupAllowRuleOutputReference" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/iotsecuritydevicegroup"

iotsecuritydevicegroup.NewIotSecurityDeviceGroupAllowRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotSecurityDeviceGroupAllowRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetConnectionFromIpsNotAllowed">ResetConnectionFromIpsNotAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetConnectionToIpsNotAllowed">ResetConnectionToIpsNotAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetLocalUsersNotAllowed">ResetLocalUsersNotAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetProcessesNotAllowed">ResetProcessesNotAllowed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionFromIpsNotAllowed` <a name="ResetConnectionFromIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetConnectionFromIpsNotAllowed"></a>

```go
func ResetConnectionFromIpsNotAllowed()
```

##### `ResetConnectionToIpsNotAllowed` <a name="ResetConnectionToIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetConnectionToIpsNotAllowed"></a>

```go
func ResetConnectionToIpsNotAllowed()
```

##### `ResetLocalUsersNotAllowed` <a name="ResetLocalUsersNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetLocalUsersNotAllowed"></a>

```go
func ResetLocalUsersNotAllowed()
```

##### `ResetProcessesNotAllowed` <a name="ResetProcessesNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetProcessesNotAllowed"></a>

```go
func ResetProcessesNotAllowed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionFromIpsNotAllowedInput">ConnectionFromIpsNotAllowedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionToIpsNotAllowedInput">ConnectionToIpsNotAllowedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.localUsersNotAllowedInput">LocalUsersNotAllowedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.processesNotAllowedInput">ProcessesNotAllowedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionFromIpsNotAllowed">ConnectionFromIpsNotAllowed</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionToIpsNotAllowed">ConnectionToIpsNotAllowed</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.localUsersNotAllowed">LocalUsersNotAllowed</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.processesNotAllowed">ProcessesNotAllowed</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionFromIpsNotAllowedInput`<sup>Optional</sup> <a name="ConnectionFromIpsNotAllowedInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionFromIpsNotAllowedInput"></a>

```go
func ConnectionFromIpsNotAllowedInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionToIpsNotAllowedInput`<sup>Optional</sup> <a name="ConnectionToIpsNotAllowedInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionToIpsNotAllowedInput"></a>

```go
func ConnectionToIpsNotAllowedInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocalUsersNotAllowedInput`<sup>Optional</sup> <a name="LocalUsersNotAllowedInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.localUsersNotAllowedInput"></a>

```go
func LocalUsersNotAllowedInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProcessesNotAllowedInput`<sup>Optional</sup> <a name="ProcessesNotAllowedInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.processesNotAllowedInput"></a>

```go
func ProcessesNotAllowedInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionFromIpsNotAllowed`<sup>Required</sup> <a name="ConnectionFromIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionFromIpsNotAllowed"></a>

```go
func ConnectionFromIpsNotAllowed() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionToIpsNotAllowed`<sup>Required</sup> <a name="ConnectionToIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionToIpsNotAllowed"></a>

```go
func ConnectionToIpsNotAllowed() *[]*string
```

- *Type:* *[]*string

---

##### `LocalUsersNotAllowed`<sup>Required</sup> <a name="LocalUsersNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.localUsersNotAllowed"></a>

```go
func LocalUsersNotAllowed() *[]*string
```

- *Type:* *[]*string

---

##### `ProcessesNotAllowed`<sup>Required</sup> <a name="ProcessesNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.processesNotAllowed"></a>

```go
func ProcessesNotAllowed() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() IotSecurityDeviceGroupAllowRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a>

---


### IotSecurityDeviceGroupRangeRuleList <a name="IotSecurityDeviceGroupRangeRuleList" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/iotsecuritydevicegroup"

iotsecuritydevicegroup.NewIotSecurityDeviceGroupRangeRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotSecurityDeviceGroupRangeRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.get"></a>

```go
func Get(index *f64) IotSecurityDeviceGroupRangeRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecurityDeviceGroupRangeRuleOutputReference <a name="IotSecurityDeviceGroupRangeRuleOutputReference" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/iotsecuritydevicegroup"

iotsecuritydevicegroup.NewIotSecurityDeviceGroupRangeRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotSecurityDeviceGroupRangeRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecurityDeviceGroupTimeoutsOutputReference <a name="IotSecurityDeviceGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/iotsecuritydevicegroup"

iotsecuritydevicegroup.NewIotSecurityDeviceGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotSecurityDeviceGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



