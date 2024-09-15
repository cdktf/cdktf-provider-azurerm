# `lbBackendAddressPoolAddress` Submodule <a name="`lbBackendAddressPoolAddress` Submodule" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbBackendAddressPoolAddress <a name="LbBackendAddressPoolAddress" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address azurerm_lb_backend_address_pool_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/lbbackendaddresspooladdress"

lbbackendaddresspooladdress.NewLbBackendAddressPoolAddress(scope Construct, id *string, config LbBackendAddressPoolAddressConfig) LbBackendAddressPoolAddress
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig">LbBackendAddressPoolAddressConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig">LbBackendAddressPoolAddressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetBackendAddressIpConfigurationId">ResetBackendAddressIpConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.putTimeouts"></a>

```go
func PutTimeouts(value LbBackendAddressPoolAddressTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a>

---

##### `ResetBackendAddressIpConfigurationId` <a name="ResetBackendAddressIpConfigurationId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetBackendAddressIpConfigurationId"></a>

```go
func ResetBackendAddressIpConfigurationId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetVirtualNetworkId"></a>

```go
func ResetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LbBackendAddressPoolAddress resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/lbbackendaddresspooladdress"

lbbackendaddresspooladdress.LbBackendAddressPoolAddress_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/lbbackendaddresspooladdress"

lbbackendaddresspooladdress.LbBackendAddressPoolAddress_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/lbbackendaddresspooladdress"

lbbackendaddresspooladdress.LbBackendAddressPoolAddress_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/lbbackendaddresspooladdress"

lbbackendaddresspooladdress.LbBackendAddressPoolAddress_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LbBackendAddressPoolAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LbBackendAddressPoolAddress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LbBackendAddressPoolAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LbBackendAddressPoolAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.inboundNatRulePortMapping">InboundNatRulePortMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList">LbBackendAddressPoolAddressInboundNatRulePortMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference">LbBackendAddressPoolAddressTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressIpConfigurationIdInput">BackendAddressIpConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressPoolIdInput">BackendAddressPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressIpConfigurationId">BackendAddressIpConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressPoolId">BackendAddressPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InboundNatRulePortMapping`<sup>Required</sup> <a name="InboundNatRulePortMapping" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.inboundNatRulePortMapping"></a>

```go
func InboundNatRulePortMapping() LbBackendAddressPoolAddressInboundNatRulePortMappingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList">LbBackendAddressPoolAddressInboundNatRulePortMappingList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.timeouts"></a>

```go
func Timeouts() LbBackendAddressPoolAddressTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference">LbBackendAddressPoolAddressTimeoutsOutputReference</a>

---

##### `BackendAddressIpConfigurationIdInput`<sup>Optional</sup> <a name="BackendAddressIpConfigurationIdInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressIpConfigurationIdInput"></a>

```go
func BackendAddressIpConfigurationIdInput() *string
```

- *Type:* *string

---

##### `BackendAddressPoolIdInput`<sup>Optional</sup> <a name="BackendAddressPoolIdInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressPoolIdInput"></a>

```go
func BackendAddressPoolIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `BackendAddressIpConfigurationId`<sup>Required</sup> <a name="BackendAddressIpConfigurationId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressIpConfigurationId"></a>

```go
func BackendAddressIpConfigurationId() *string
```

- *Type:* *string

---

##### `BackendAddressPoolId`<sup>Required</sup> <a name="BackendAddressPoolId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressPoolId"></a>

```go
func BackendAddressPoolId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LbBackendAddressPoolAddressConfig <a name="LbBackendAddressPoolAddressConfig" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/lbbackendaddresspooladdress"

&lbbackendaddresspooladdress.LbBackendAddressPoolAddressConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackendAddressPoolId: *string,
	Name: *string,
	BackendAddressIpConfigurationId: *string,
	Id: *string,
	IpAddress: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts,
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.backendAddressPoolId">BackendAddressPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#backend_address_pool_id LbBackendAddressPoolAddress#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#name LbBackendAddressPoolAddress#name}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.backendAddressIpConfigurationId">BackendAddressIpConfigurationId</a></code> | <code>*string</code> | For global load balancer, user needs to specify the `backend_address_ip_configuration_id` of the added regional load balancers. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#id LbBackendAddressPoolAddress#id}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.ipAddress">IpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#ip_address LbBackendAddressPoolAddress#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#virtual_network_id LbBackendAddressPoolAddress#virtual_network_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendAddressPoolId`<sup>Required</sup> <a name="BackendAddressPoolId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.backendAddressPoolId"></a>

```go
BackendAddressPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#backend_address_pool_id LbBackendAddressPoolAddress#backend_address_pool_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#name LbBackendAddressPoolAddress#name}.

---

##### `BackendAddressIpConfigurationId`<sup>Optional</sup> <a name="BackendAddressIpConfigurationId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.backendAddressIpConfigurationId"></a>

```go
BackendAddressIpConfigurationId *string
```

- *Type:* *string

For global load balancer, user needs to specify the `backend_address_ip_configuration_id` of the added regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#backend_address_ip_configuration_id LbBackendAddressPoolAddress#backend_address_ip_configuration_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#id LbBackendAddressPoolAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#ip_address LbBackendAddressPoolAddress#ip_address}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.timeouts"></a>

```go
Timeouts LbBackendAddressPoolAddressTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#timeouts LbBackendAddressPoolAddress#timeouts}

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#virtual_network_id LbBackendAddressPoolAddress#virtual_network_id}.

---

### LbBackendAddressPoolAddressInboundNatRulePortMapping <a name="LbBackendAddressPoolAddressInboundNatRulePortMapping" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/lbbackendaddresspooladdress"

&lbbackendaddresspooladdress.LbBackendAddressPoolAddressInboundNatRulePortMapping {

}
```


### LbBackendAddressPoolAddressTimeouts <a name="LbBackendAddressPoolAddressTimeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/lbbackendaddresspooladdress"

&lbbackendaddresspooladdress.LbBackendAddressPoolAddressTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#create LbBackendAddressPoolAddress#create}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#delete LbBackendAddressPoolAddress#delete}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#read LbBackendAddressPoolAddress#read}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#update LbBackendAddressPoolAddress#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#create LbBackendAddressPoolAddress#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#delete LbBackendAddressPoolAddress#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#read LbBackendAddressPoolAddress#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/lb_backend_address_pool_address#update LbBackendAddressPoolAddress#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbBackendAddressPoolAddressInboundNatRulePortMappingList <a name="LbBackendAddressPoolAddressInboundNatRulePortMappingList" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/lbbackendaddresspooladdress"

lbbackendaddresspooladdress.NewLbBackendAddressPoolAddressInboundNatRulePortMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LbBackendAddressPoolAddressInboundNatRulePortMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.get"></a>

```go
func Get(index *f64) LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference <a name="LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/lbbackendaddresspooladdress"

lbbackendaddresspooladdress.NewLbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.backendPort">BackendPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.frontendPort">FrontendPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.inboundNatRuleName">InboundNatRuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping">LbBackendAddressPoolAddressInboundNatRulePortMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.backendPort"></a>

```go
func BackendPort() *f64
```

- *Type:* *f64

---

##### `FrontendPort`<sup>Required</sup> <a name="FrontendPort" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.frontendPort"></a>

```go
func FrontendPort() *f64
```

- *Type:* *f64

---

##### `InboundNatRuleName`<sup>Required</sup> <a name="InboundNatRuleName" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.inboundNatRuleName"></a>

```go
func InboundNatRuleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() LbBackendAddressPoolAddressInboundNatRulePortMapping
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping">LbBackendAddressPoolAddressInboundNatRulePortMapping</a>

---


### LbBackendAddressPoolAddressTimeoutsOutputReference <a name="LbBackendAddressPoolAddressTimeoutsOutputReference" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/lbbackendaddresspooladdress"

lbbackendaddresspooladdress.NewLbBackendAddressPoolAddressTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbBackendAddressPoolAddressTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



