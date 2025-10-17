# `paloAltoVirtualNetworkAppliance` Submodule <a name="`paloAltoVirtualNetworkAppliance` Submodule" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaloAltoVirtualNetworkAppliance <a name="PaloAltoVirtualNetworkAppliance" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/palo_alto_virtual_network_appliance azurerm_palo_alto_virtual_network_appliance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/paloaltovirtualnetworkappliance"

paloaltovirtualnetworkappliance.NewPaloAltoVirtualNetworkAppliance(scope Construct, id *string, config PaloAltoVirtualNetworkApplianceConfig) PaloAltoVirtualNetworkAppliance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig">PaloAltoVirtualNetworkApplianceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig">PaloAltoVirtualNetworkApplianceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.putTimeouts"></a>

```go
func PutTimeouts(value PaloAltoVirtualNetworkApplianceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts">PaloAltoVirtualNetworkApplianceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PaloAltoVirtualNetworkAppliance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/paloaltovirtualnetworkappliance"

paloaltovirtualnetworkappliance.PaloAltoVirtualNetworkAppliance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/paloaltovirtualnetworkappliance"

paloaltovirtualnetworkappliance.PaloAltoVirtualNetworkAppliance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/paloaltovirtualnetworkappliance"

paloaltovirtualnetworkappliance.PaloAltoVirtualNetworkAppliance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/paloaltovirtualnetworkappliance"

paloaltovirtualnetworkappliance.PaloAltoVirtualNetworkAppliance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PaloAltoVirtualNetworkAppliance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PaloAltoVirtualNetworkAppliance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PaloAltoVirtualNetworkAppliance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/palo_alto_virtual_network_appliance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PaloAltoVirtualNetworkAppliance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference">PaloAltoVirtualNetworkApplianceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.virtualHubIdInput">VirtualHubIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.virtualHubId">VirtualHubId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.timeouts"></a>

```go
func Timeouts() PaloAltoVirtualNetworkApplianceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference">PaloAltoVirtualNetworkApplianceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualHubIdInput`<sup>Optional</sup> <a name="VirtualHubIdInput" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.virtualHubIdInput"></a>

```go
func VirtualHubIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `VirtualHubId`<sup>Required</sup> <a name="VirtualHubId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.virtualHubId"></a>

```go
func VirtualHubId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkAppliance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PaloAltoVirtualNetworkApplianceConfig <a name="PaloAltoVirtualNetworkApplianceConfig" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/paloaltovirtualnetworkappliance"

&paloaltovirtualnetworkappliance.PaloAltoVirtualNetworkApplianceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	VirtualHubId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/palo_alto_virtual_network_appliance#name PaloAltoVirtualNetworkAppliance#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.virtualHubId">VirtualHubId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/palo_alto_virtual_network_appliance#virtual_hub_id PaloAltoVirtualNetworkAppliance#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/palo_alto_virtual_network_appliance#id PaloAltoVirtualNetworkAppliance#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts">PaloAltoVirtualNetworkApplianceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/palo_alto_virtual_network_appliance#name PaloAltoVirtualNetworkAppliance#name}.

---

##### `VirtualHubId`<sup>Required</sup> <a name="VirtualHubId" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.virtualHubId"></a>

```go
VirtualHubId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/palo_alto_virtual_network_appliance#virtual_hub_id PaloAltoVirtualNetworkAppliance#virtual_hub_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/palo_alto_virtual_network_appliance#id PaloAltoVirtualNetworkAppliance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceConfig.property.timeouts"></a>

```go
Timeouts PaloAltoVirtualNetworkApplianceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts">PaloAltoVirtualNetworkApplianceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/palo_alto_virtual_network_appliance#timeouts PaloAltoVirtualNetworkAppliance#timeouts}

---

### PaloAltoVirtualNetworkApplianceTimeouts <a name="PaloAltoVirtualNetworkApplianceTimeouts" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/paloaltovirtualnetworkappliance"

&paloaltovirtualnetworkappliance.PaloAltoVirtualNetworkApplianceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/palo_alto_virtual_network_appliance#create PaloAltoVirtualNetworkAppliance#create}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/palo_alto_virtual_network_appliance#delete PaloAltoVirtualNetworkAppliance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/palo_alto_virtual_network_appliance#read PaloAltoVirtualNetworkAppliance#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/palo_alto_virtual_network_appliance#create PaloAltoVirtualNetworkAppliance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/palo_alto_virtual_network_appliance#delete PaloAltoVirtualNetworkAppliance#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/palo_alto_virtual_network_appliance#read PaloAltoVirtualNetworkAppliance#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### PaloAltoVirtualNetworkApplianceTimeoutsOutputReference <a name="PaloAltoVirtualNetworkApplianceTimeoutsOutputReference" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/paloaltovirtualnetworkappliance"

paloaltovirtualnetworkappliance.NewPaloAltoVirtualNetworkApplianceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PaloAltoVirtualNetworkApplianceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.paloAltoVirtualNetworkAppliance.PaloAltoVirtualNetworkApplianceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



