# `mobileNetworkSim` Submodule <a name="`mobileNetworkSim` Submodule" id="@cdktf/provider-azurerm.mobileNetworkSim"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkSim <a name="MobileNetworkSim" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim azurerm_mobile_network_sim}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mobilenetworksim"

mobilenetworksim.NewMobileNetworkSim(scope Construct, id *string, config MobileNetworkSimConfig) MobileNetworkSim
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig">MobileNetworkSimConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig">MobileNetworkSimConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.putStaticIpConfiguration">PutStaticIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetDeviceType">ResetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetSimPolicyId">ResetSimPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetStaticIpConfiguration">ResetStaticIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStaticIpConfiguration` <a name="PutStaticIpConfiguration" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.putStaticIpConfiguration"></a>

```go
func PutStaticIpConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.putStaticIpConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.putTimeouts"></a>

```go
func PutTimeouts(value MobileNetworkSimTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts">MobileNetworkSimTimeouts</a>

---

##### `ResetDeviceType` <a name="ResetDeviceType" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetDeviceType"></a>

```go
func ResetDeviceType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetId"></a>

```go
func ResetId()
```

##### `ResetSimPolicyId` <a name="ResetSimPolicyId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetSimPolicyId"></a>

```go
func ResetSimPolicyId()
```

##### `ResetStaticIpConfiguration` <a name="ResetStaticIpConfiguration" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetStaticIpConfiguration"></a>

```go
func ResetStaticIpConfiguration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MobileNetworkSim resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mobilenetworksim"

mobilenetworksim.MobileNetworkSim_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mobilenetworksim"

mobilenetworksim.MobileNetworkSim_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mobilenetworksim"

mobilenetworksim.MobileNetworkSim_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mobilenetworksim"

mobilenetworksim.MobileNetworkSim_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MobileNetworkSim resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MobileNetworkSim to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MobileNetworkSim that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MobileNetworkSim to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.simState">SimState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.staticIpConfiguration">StaticIpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList">MobileNetworkSimStaticIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference">MobileNetworkSimTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.vendorKeyFingerprint">VendorKeyFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.vendorName">VendorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.authenticationKeyInput">AuthenticationKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.deviceTypeInput">DeviceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.integratedCircuitCardIdentifierInput">IntegratedCircuitCardIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.internationalMobileSubscriberIdentityInput">InternationalMobileSubscriberIdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.mobileNetworkSimGroupIdInput">MobileNetworkSimGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.operatorKeyCodeInput">OperatorKeyCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.simPolicyIdInput">SimPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.staticIpConfigurationInput">StaticIpConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.authenticationKey">AuthenticationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.deviceType">DeviceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.integratedCircuitCardIdentifier">IntegratedCircuitCardIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.internationalMobileSubscriberIdentity">InternationalMobileSubscriberIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.mobileNetworkSimGroupId">MobileNetworkSimGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.operatorKeyCode">OperatorKeyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.simPolicyId">SimPolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SimState`<sup>Required</sup> <a name="SimState" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.simState"></a>

```go
func SimState() *string
```

- *Type:* *string

---

##### `StaticIpConfiguration`<sup>Required</sup> <a name="StaticIpConfiguration" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.staticIpConfiguration"></a>

```go
func StaticIpConfiguration() MobileNetworkSimStaticIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList">MobileNetworkSimStaticIpConfigurationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.timeouts"></a>

```go
func Timeouts() MobileNetworkSimTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference">MobileNetworkSimTimeoutsOutputReference</a>

---

##### `VendorKeyFingerprint`<sup>Required</sup> <a name="VendorKeyFingerprint" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.vendorKeyFingerprint"></a>

```go
func VendorKeyFingerprint() *string
```

- *Type:* *string

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.vendorName"></a>

```go
func VendorName() *string
```

- *Type:* *string

---

##### `AuthenticationKeyInput`<sup>Optional</sup> <a name="AuthenticationKeyInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.authenticationKeyInput"></a>

```go
func AuthenticationKeyInput() *string
```

- *Type:* *string

---

##### `DeviceTypeInput`<sup>Optional</sup> <a name="DeviceTypeInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.deviceTypeInput"></a>

```go
func DeviceTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegratedCircuitCardIdentifierInput`<sup>Optional</sup> <a name="IntegratedCircuitCardIdentifierInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.integratedCircuitCardIdentifierInput"></a>

```go
func IntegratedCircuitCardIdentifierInput() *string
```

- *Type:* *string

---

##### `InternationalMobileSubscriberIdentityInput`<sup>Optional</sup> <a name="InternationalMobileSubscriberIdentityInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.internationalMobileSubscriberIdentityInput"></a>

```go
func InternationalMobileSubscriberIdentityInput() *string
```

- *Type:* *string

---

##### `MobileNetworkSimGroupIdInput`<sup>Optional</sup> <a name="MobileNetworkSimGroupIdInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.mobileNetworkSimGroupIdInput"></a>

```go
func MobileNetworkSimGroupIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorKeyCodeInput`<sup>Optional</sup> <a name="OperatorKeyCodeInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.operatorKeyCodeInput"></a>

```go
func OperatorKeyCodeInput() *string
```

- *Type:* *string

---

##### `SimPolicyIdInput`<sup>Optional</sup> <a name="SimPolicyIdInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.simPolicyIdInput"></a>

```go
func SimPolicyIdInput() *string
```

- *Type:* *string

---

##### `StaticIpConfigurationInput`<sup>Optional</sup> <a name="StaticIpConfigurationInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.staticIpConfigurationInput"></a>

```go
func StaticIpConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthenticationKey`<sup>Required</sup> <a name="AuthenticationKey" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.authenticationKey"></a>

```go
func AuthenticationKey() *string
```

- *Type:* *string

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.deviceType"></a>

```go
func DeviceType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegratedCircuitCardIdentifier`<sup>Required</sup> <a name="IntegratedCircuitCardIdentifier" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.integratedCircuitCardIdentifier"></a>

```go
func IntegratedCircuitCardIdentifier() *string
```

- *Type:* *string

---

##### `InternationalMobileSubscriberIdentity`<sup>Required</sup> <a name="InternationalMobileSubscriberIdentity" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.internationalMobileSubscriberIdentity"></a>

```go
func InternationalMobileSubscriberIdentity() *string
```

- *Type:* *string

---

##### `MobileNetworkSimGroupId`<sup>Required</sup> <a name="MobileNetworkSimGroupId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.mobileNetworkSimGroupId"></a>

```go
func MobileNetworkSimGroupId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OperatorKeyCode`<sup>Required</sup> <a name="OperatorKeyCode" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.operatorKeyCode"></a>

```go
func OperatorKeyCode() *string
```

- *Type:* *string

---

##### `SimPolicyId`<sup>Required</sup> <a name="SimPolicyId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.simPolicyId"></a>

```go
func SimPolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSim.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkSimConfig <a name="MobileNetworkSimConfig" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mobilenetworksim"

&mobilenetworksim.MobileNetworkSimConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthenticationKey: *string,
	IntegratedCircuitCardIdentifier: *string,
	InternationalMobileSubscriberIdentity: *string,
	MobileNetworkSimGroupId: *string,
	Name: *string,
	OperatorKeyCode: *string,
	DeviceType: *string,
	Id: *string,
	SimPolicyId: *string,
	StaticIpConfiguration: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.mobileNetworkSim.MobileNetworkSimTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.authenticationKey">AuthenticationKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#authentication_key MobileNetworkSim#authentication_key}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.integratedCircuitCardIdentifier">IntegratedCircuitCardIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#integrated_circuit_card_identifier MobileNetworkSim#integrated_circuit_card_identifier}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.internationalMobileSubscriberIdentity">InternationalMobileSubscriberIdentity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#international_mobile_subscriber_identity MobileNetworkSim#international_mobile_subscriber_identity}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.mobileNetworkSimGroupId">MobileNetworkSimGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#mobile_network_sim_group_id MobileNetworkSim#mobile_network_sim_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#name MobileNetworkSim#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.operatorKeyCode">OperatorKeyCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#operator_key_code MobileNetworkSim#operator_key_code}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.deviceType">DeviceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#device_type MobileNetworkSim#device_type}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#id MobileNetworkSim#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.simPolicyId">SimPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#sim_policy_id MobileNetworkSim#sim_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.staticIpConfiguration">StaticIpConfiguration</a></code> | <code>interface{}</code> | static_ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts">MobileNetworkSimTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthenticationKey`<sup>Required</sup> <a name="AuthenticationKey" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.authenticationKey"></a>

```go
AuthenticationKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#authentication_key MobileNetworkSim#authentication_key}.

---

##### `IntegratedCircuitCardIdentifier`<sup>Required</sup> <a name="IntegratedCircuitCardIdentifier" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.integratedCircuitCardIdentifier"></a>

```go
IntegratedCircuitCardIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#integrated_circuit_card_identifier MobileNetworkSim#integrated_circuit_card_identifier}.

---

##### `InternationalMobileSubscriberIdentity`<sup>Required</sup> <a name="InternationalMobileSubscriberIdentity" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.internationalMobileSubscriberIdentity"></a>

```go
InternationalMobileSubscriberIdentity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#international_mobile_subscriber_identity MobileNetworkSim#international_mobile_subscriber_identity}.

---

##### `MobileNetworkSimGroupId`<sup>Required</sup> <a name="MobileNetworkSimGroupId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.mobileNetworkSimGroupId"></a>

```go
MobileNetworkSimGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#mobile_network_sim_group_id MobileNetworkSim#mobile_network_sim_group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#name MobileNetworkSim#name}.

---

##### `OperatorKeyCode`<sup>Required</sup> <a name="OperatorKeyCode" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.operatorKeyCode"></a>

```go
OperatorKeyCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#operator_key_code MobileNetworkSim#operator_key_code}.

---

##### `DeviceType`<sup>Optional</sup> <a name="DeviceType" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.deviceType"></a>

```go
DeviceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#device_type MobileNetworkSim#device_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#id MobileNetworkSim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SimPolicyId`<sup>Optional</sup> <a name="SimPolicyId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.simPolicyId"></a>

```go
SimPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#sim_policy_id MobileNetworkSim#sim_policy_id}.

---

##### `StaticIpConfiguration`<sup>Optional</sup> <a name="StaticIpConfiguration" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.staticIpConfiguration"></a>

```go
StaticIpConfiguration interface{}
```

- *Type:* interface{}

static_ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#static_ip_configuration MobileNetworkSim#static_ip_configuration}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimConfig.property.timeouts"></a>

```go
Timeouts MobileNetworkSimTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts">MobileNetworkSimTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#timeouts MobileNetworkSim#timeouts}

---

### MobileNetworkSimStaticIpConfiguration <a name="MobileNetworkSimStaticIpConfiguration" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mobilenetworksim"

&mobilenetworksim.MobileNetworkSimStaticIpConfiguration {
	AttachedDataNetworkId: *string,
	SliceId: *string,
	StaticIpv4Address: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration.property.attachedDataNetworkId">AttachedDataNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#attached_data_network_id MobileNetworkSim#attached_data_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration.property.sliceId">SliceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#slice_id MobileNetworkSim#slice_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration.property.staticIpv4Address">StaticIpv4Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#static_ipv4_address MobileNetworkSim#static_ipv4_address}. |

---

##### `AttachedDataNetworkId`<sup>Required</sup> <a name="AttachedDataNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration.property.attachedDataNetworkId"></a>

```go
AttachedDataNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#attached_data_network_id MobileNetworkSim#attached_data_network_id}.

---

##### `SliceId`<sup>Required</sup> <a name="SliceId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration.property.sliceId"></a>

```go
SliceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#slice_id MobileNetworkSim#slice_id}.

---

##### `StaticIpv4Address`<sup>Optional</sup> <a name="StaticIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfiguration.property.staticIpv4Address"></a>

```go
StaticIpv4Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#static_ipv4_address MobileNetworkSim#static_ipv4_address}.

---

### MobileNetworkSimTimeouts <a name="MobileNetworkSimTimeouts" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mobilenetworksim"

&mobilenetworksim.MobileNetworkSimTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#create MobileNetworkSim#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#delete MobileNetworkSim#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#read MobileNetworkSim#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#update MobileNetworkSim#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#create MobileNetworkSim#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#delete MobileNetworkSim#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#read MobileNetworkSim#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/mobile_network_sim#update MobileNetworkSim#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkSimStaticIpConfigurationList <a name="MobileNetworkSimStaticIpConfigurationList" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mobilenetworksim"

mobilenetworksim.NewMobileNetworkSimStaticIpConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MobileNetworkSimStaticIpConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.get"></a>

```go
func Get(index *f64) MobileNetworkSimStaticIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MobileNetworkSimStaticIpConfigurationOutputReference <a name="MobileNetworkSimStaticIpConfigurationOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mobilenetworksim"

mobilenetworksim.NewMobileNetworkSimStaticIpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MobileNetworkSimStaticIpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.resetStaticIpv4Address">ResetStaticIpv4Address</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStaticIpv4Address` <a name="ResetStaticIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.resetStaticIpv4Address"></a>

```go
func ResetStaticIpv4Address()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.attachedDataNetworkIdInput">AttachedDataNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.sliceIdInput">SliceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.staticIpv4AddressInput">StaticIpv4AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.attachedDataNetworkId">AttachedDataNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.sliceId">SliceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.staticIpv4Address">StaticIpv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachedDataNetworkIdInput`<sup>Optional</sup> <a name="AttachedDataNetworkIdInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.attachedDataNetworkIdInput"></a>

```go
func AttachedDataNetworkIdInput() *string
```

- *Type:* *string

---

##### `SliceIdInput`<sup>Optional</sup> <a name="SliceIdInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.sliceIdInput"></a>

```go
func SliceIdInput() *string
```

- *Type:* *string

---

##### `StaticIpv4AddressInput`<sup>Optional</sup> <a name="StaticIpv4AddressInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.staticIpv4AddressInput"></a>

```go
func StaticIpv4AddressInput() *string
```

- *Type:* *string

---

##### `AttachedDataNetworkId`<sup>Required</sup> <a name="AttachedDataNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.attachedDataNetworkId"></a>

```go
func AttachedDataNetworkId() *string
```

- *Type:* *string

---

##### `SliceId`<sup>Required</sup> <a name="SliceId" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.sliceId"></a>

```go
func SliceId() *string
```

- *Type:* *string

---

##### `StaticIpv4Address`<sup>Required</sup> <a name="StaticIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.staticIpv4Address"></a>

```go
func StaticIpv4Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimStaticIpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MobileNetworkSimTimeoutsOutputReference <a name="MobileNetworkSimTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mobilenetworksim"

mobilenetworksim.NewMobileNetworkSimTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MobileNetworkSimTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSim.MobileNetworkSimTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



