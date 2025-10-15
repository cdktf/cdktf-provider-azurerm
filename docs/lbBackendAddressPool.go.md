# `lbBackendAddressPool` Submodule <a name="`lbBackendAddressPool` Submodule" id="@cdktf/provider-azurerm.lbBackendAddressPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbBackendAddressPool <a name="LbBackendAddressPool" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool azurerm_lb_backend_address_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lbbackendaddresspool"

lbbackendaddresspool.NewLbBackendAddressPool(scope Construct, id *string, config LbBackendAddressPoolConfig) LbBackendAddressPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig">LbBackendAddressPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig">LbBackendAddressPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.putTunnelInterface">PutTunnelInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.resetSynchronousMode">ResetSynchronousMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.resetTunnelInterface">ResetTunnelInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.putTimeouts"></a>

```go
func PutTimeouts(value LbBackendAddressPoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeouts">LbBackendAddressPoolTimeouts</a>

---

##### `PutTunnelInterface` <a name="PutTunnelInterface" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.putTunnelInterface"></a>

```go
func PutTunnelInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.putTunnelInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.resetId"></a>

```go
func ResetId()
```

##### `ResetSynchronousMode` <a name="ResetSynchronousMode" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.resetSynchronousMode"></a>

```go
func ResetSynchronousMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTunnelInterface` <a name="ResetTunnelInterface" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.resetTunnelInterface"></a>

```go
func ResetTunnelInterface()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.resetVirtualNetworkId"></a>

```go
func ResetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LbBackendAddressPool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lbbackendaddresspool"

lbbackendaddresspool.LbBackendAddressPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lbbackendaddresspool"

lbbackendaddresspool.LbBackendAddressPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lbbackendaddresspool"

lbbackendaddresspool.LbBackendAddressPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lbbackendaddresspool"

lbbackendaddresspool.LbBackendAddressPool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LbBackendAddressPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LbBackendAddressPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LbBackendAddressPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LbBackendAddressPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.backendIpConfigurations">BackendIpConfigurations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.inboundNatRules">InboundNatRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.loadBalancingRules">LoadBalancingRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.outboundRules">OutboundRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference">LbBackendAddressPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.tunnelInterface">TunnelInterface</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList">LbBackendAddressPoolTunnelInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.loadbalancerIdInput">LoadbalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.synchronousModeInput">SynchronousModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.tunnelInterfaceInput">TunnelInterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.loadbalancerId">LoadbalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.synchronousMode">SynchronousMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendIpConfigurations`<sup>Required</sup> <a name="BackendIpConfigurations" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.backendIpConfigurations"></a>

```go
func BackendIpConfigurations() *[]*string
```

- *Type:* *[]*string

---

##### `InboundNatRules`<sup>Required</sup> <a name="InboundNatRules" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.inboundNatRules"></a>

```go
func InboundNatRules() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancingRules`<sup>Required</sup> <a name="LoadBalancingRules" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.loadBalancingRules"></a>

```go
func LoadBalancingRules() *[]*string
```

- *Type:* *[]*string

---

##### `OutboundRules`<sup>Required</sup> <a name="OutboundRules" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.outboundRules"></a>

```go
func OutboundRules() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.timeouts"></a>

```go
func Timeouts() LbBackendAddressPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference">LbBackendAddressPoolTimeoutsOutputReference</a>

---

##### `TunnelInterface`<sup>Required</sup> <a name="TunnelInterface" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.tunnelInterface"></a>

```go
func TunnelInterface() LbBackendAddressPoolTunnelInterfaceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList">LbBackendAddressPoolTunnelInterfaceList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadbalancerIdInput`<sup>Optional</sup> <a name="LoadbalancerIdInput" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.loadbalancerIdInput"></a>

```go
func LoadbalancerIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SynchronousModeInput`<sup>Optional</sup> <a name="SynchronousModeInput" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.synchronousModeInput"></a>

```go
func SynchronousModeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TunnelInterfaceInput`<sup>Optional</sup> <a name="TunnelInterfaceInput" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.tunnelInterfaceInput"></a>

```go
func TunnelInterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadbalancerId`<sup>Required</sup> <a name="LoadbalancerId" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.loadbalancerId"></a>

```go
func LoadbalancerId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SynchronousMode`<sup>Required</sup> <a name="SynchronousMode" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.synchronousMode"></a>

```go
func SynchronousMode() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LbBackendAddressPoolConfig <a name="LbBackendAddressPoolConfig" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lbbackendaddresspool"

&lbbackendaddresspool.LbBackendAddressPoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LoadbalancerId: *string,
	Name: *string,
	Id: *string,
	SynchronousMode: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.lbBackendAddressPool.LbBackendAddressPoolTimeouts,
	TunnelInterface: interface{},
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.loadbalancerId">LoadbalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#loadbalancer_id LbBackendAddressPool#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#name LbBackendAddressPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#id LbBackendAddressPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.synchronousMode">SynchronousMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#synchronous_mode LbBackendAddressPool#synchronous_mode}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeouts">LbBackendAddressPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.tunnelInterface">TunnelInterface</a></code> | <code>interface{}</code> | tunnel_interface block. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#virtual_network_id LbBackendAddressPool#virtual_network_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LoadbalancerId`<sup>Required</sup> <a name="LoadbalancerId" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.loadbalancerId"></a>

```go
LoadbalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#loadbalancer_id LbBackendAddressPool#loadbalancer_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#name LbBackendAddressPool#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#id LbBackendAddressPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SynchronousMode`<sup>Optional</sup> <a name="SynchronousMode" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.synchronousMode"></a>

```go
SynchronousMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#synchronous_mode LbBackendAddressPool#synchronous_mode}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.timeouts"></a>

```go
Timeouts LbBackendAddressPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeouts">LbBackendAddressPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#timeouts LbBackendAddressPool#timeouts}

---

##### `TunnelInterface`<sup>Optional</sup> <a name="TunnelInterface" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.tunnelInterface"></a>

```go
TunnelInterface interface{}
```

- *Type:* interface{}

tunnel_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#tunnel_interface LbBackendAddressPool#tunnel_interface}

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolConfig.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#virtual_network_id LbBackendAddressPool#virtual_network_id}.

---

### LbBackendAddressPoolTimeouts <a name="LbBackendAddressPoolTimeouts" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lbbackendaddresspool"

&lbbackendaddresspool.LbBackendAddressPoolTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#create LbBackendAddressPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#delete LbBackendAddressPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#read LbBackendAddressPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#update LbBackendAddressPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#create LbBackendAddressPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#delete LbBackendAddressPool#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#read LbBackendAddressPool#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#update LbBackendAddressPool#update}.

---

### LbBackendAddressPoolTunnelInterface <a name="LbBackendAddressPoolTunnelInterface" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lbbackendaddresspool"

&lbbackendaddresspool.LbBackendAddressPoolTunnelInterface {
	Identifier: *f64,
	Port: *f64,
	Protocol: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterface.property.identifier">Identifier</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#identifier LbBackendAddressPool#identifier}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterface.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#port LbBackendAddressPool#port}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterface.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#protocol LbBackendAddressPool#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterface.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#type LbBackendAddressPool#type}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterface.property.identifier"></a>

```go
Identifier *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#identifier LbBackendAddressPool#identifier}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterface.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#port LbBackendAddressPool#port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterface.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#protocol LbBackendAddressPool#protocol}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterface.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/lb_backend_address_pool#type LbBackendAddressPool#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbBackendAddressPoolTimeoutsOutputReference <a name="LbBackendAddressPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lbbackendaddresspool"

lbbackendaddresspool.NewLbBackendAddressPoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbBackendAddressPoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbBackendAddressPoolTunnelInterfaceList <a name="LbBackendAddressPoolTunnelInterfaceList" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lbbackendaddresspool"

lbbackendaddresspool.NewLbBackendAddressPoolTunnelInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LbBackendAddressPoolTunnelInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.get"></a>

```go
func Get(index *f64) LbBackendAddressPoolTunnelInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbBackendAddressPoolTunnelInterfaceOutputReference <a name="LbBackendAddressPoolTunnelInterfaceOutputReference" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lbbackendaddresspool"

lbbackendaddresspool.NewLbBackendAddressPoolTunnelInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LbBackendAddressPoolTunnelInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.identifier">Identifier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *f64
```

- *Type:* *f64

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.identifier"></a>

```go
func Identifier() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lbBackendAddressPool.LbBackendAddressPoolTunnelInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



