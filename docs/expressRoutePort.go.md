# `expressRoutePort` Submodule <a name="`expressRoutePort` Submodule" id="@cdktf/provider-azurerm.expressRoutePort"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRoutePort <a name="ExpressRoutePort" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port azurerm_express_route_port}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteport"

expressrouteport.NewExpressRoutePort(scope Construct, id *string, config ExpressRoutePortConfig) ExpressRoutePort
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig">ExpressRoutePortConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig">ExpressRoutePortConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1">PutLink1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2">PutLink2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetBillingType">ResetBillingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink1">ResetLink1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink2">ResetLink2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putIdentity"></a>

```go
func PutIdentity(value ExpressRoutePortIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

---

##### `PutLink1` <a name="PutLink1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1"></a>

```go
func PutLink1(value ExpressRoutePortLink1)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

---

##### `PutLink2` <a name="PutLink2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2"></a>

```go
func PutLink2(value ExpressRoutePortLink2)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts"></a>

```go
func PutTimeouts(value ExpressRoutePortTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>

---

##### `ResetBillingType` <a name="ResetBillingType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetBillingType"></a>

```go
func ResetBillingType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetLink1` <a name="ResetLink1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink1"></a>

```go
func ResetLink1()
```

##### `ResetLink2` <a name="ResetLink2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink2"></a>

```go
func ResetLink2()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ExpressRoutePort resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteport"

expressrouteport.ExpressRoutePort_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteport"

expressrouteport.ExpressRoutePort_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteport"

expressrouteport.ExpressRoutePort_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteport"

expressrouteport.ExpressRoutePort_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ExpressRoutePort resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ExpressRoutePort to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ExpressRoutePort that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ExpressRoutePort to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.ethertype">Ethertype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference">ExpressRoutePortIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1">Link1</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference">ExpressRoutePortLink1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2">Link2</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference">ExpressRoutePortLink2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.mtu">Mtu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference">ExpressRoutePortTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbpsInput">BandwidthInGbpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingTypeInput">BillingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulationInput">EncapsulationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1Input">Link1Input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2Input">Link2Input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocationInput">PeeringLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbps">BandwidthInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingType">BillingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulation">Encapsulation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocation">PeeringLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ethertype`<sup>Required</sup> <a name="Ethertype" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.ethertype"></a>

```go
func Ethertype() *string
```

- *Type:* *string

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identity"></a>

```go
func Identity() ExpressRoutePortIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference">ExpressRoutePortIdentityOutputReference</a>

---

##### `Link1`<sup>Required</sup> <a name="Link1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1"></a>

```go
func Link1() ExpressRoutePortLink1OutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference">ExpressRoutePortLink1OutputReference</a>

---

##### `Link2`<sup>Required</sup> <a name="Link2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2"></a>

```go
func Link2() ExpressRoutePortLink2OutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference">ExpressRoutePortLink2OutputReference</a>

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.mtu"></a>

```go
func Mtu() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeouts"></a>

```go
func Timeouts() ExpressRoutePortTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference">ExpressRoutePortTimeoutsOutputReference</a>

---

##### `BandwidthInGbpsInput`<sup>Optional</sup> <a name="BandwidthInGbpsInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbpsInput"></a>

```go
func BandwidthInGbpsInput() *f64
```

- *Type:* *f64

---

##### `BillingTypeInput`<sup>Optional</sup> <a name="BillingTypeInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingTypeInput"></a>

```go
func BillingTypeInput() *string
```

- *Type:* *string

---

##### `EncapsulationInput`<sup>Optional</sup> <a name="EncapsulationInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulationInput"></a>

```go
func EncapsulationInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identityInput"></a>

```go
func IdentityInput() ExpressRoutePortIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Link1Input`<sup>Optional</sup> <a name="Link1Input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1Input"></a>

```go
func Link1Input() ExpressRoutePortLink1
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

---

##### `Link2Input`<sup>Optional</sup> <a name="Link2Input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2Input"></a>

```go
func Link2Input() ExpressRoutePortLink2
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeeringLocationInput`<sup>Optional</sup> <a name="PeeringLocationInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocationInput"></a>

```go
func PeeringLocationInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BandwidthInGbps`<sup>Required</sup> <a name="BandwidthInGbps" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbps"></a>

```go
func BandwidthInGbps() *f64
```

- *Type:* *f64

---

##### `BillingType`<sup>Required</sup> <a name="BillingType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingType"></a>

```go
func BillingType() *string
```

- *Type:* *string

---

##### `Encapsulation`<sup>Required</sup> <a name="Encapsulation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulation"></a>

```go
func Encapsulation() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PeeringLocation`<sup>Required</sup> <a name="PeeringLocation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocation"></a>

```go
func PeeringLocation() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRoutePortConfig <a name="ExpressRoutePortConfig" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteport"

&expressrouteport.ExpressRoutePortConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BandwidthInGbps: *f64,
	Encapsulation: *string,
	Location: *string,
	Name: *string,
	PeeringLocation: *string,
	ResourceGroupName: *string,
	BillingType: *string,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.expressRoutePort.ExpressRoutePortIdentity,
	Link1: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.expressRoutePort.ExpressRoutePortLink1,
	Link2: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.expressRoutePort.ExpressRoutePortLink2,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.expressRoutePort.ExpressRoutePortTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.bandwidthInGbps">BandwidthInGbps</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#bandwidth_in_gbps ExpressRoutePort#bandwidth_in_gbps}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.encapsulation">Encapsulation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#encapsulation ExpressRoutePort#encapsulation}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#location ExpressRoutePort#location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#name ExpressRoutePort#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.peeringLocation">PeeringLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#peering_location ExpressRoutePort#peering_location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#resource_group_name ExpressRoutePort#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.billingType">BillingType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#billing_type ExpressRoutePort#billing_type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#id ExpressRoutePort#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link1">Link1</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | link1 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link2">Link2</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | link2 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#tags ExpressRoutePort#tags}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BandwidthInGbps`<sup>Required</sup> <a name="BandwidthInGbps" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.bandwidthInGbps"></a>

```go
BandwidthInGbps *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#bandwidth_in_gbps ExpressRoutePort#bandwidth_in_gbps}.

---

##### `Encapsulation`<sup>Required</sup> <a name="Encapsulation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.encapsulation"></a>

```go
Encapsulation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#encapsulation ExpressRoutePort#encapsulation}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#location ExpressRoutePort#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#name ExpressRoutePort#name}.

---

##### `PeeringLocation`<sup>Required</sup> <a name="PeeringLocation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.peeringLocation"></a>

```go
PeeringLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#peering_location ExpressRoutePort#peering_location}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#resource_group_name ExpressRoutePort#resource_group_name}.

---

##### `BillingType`<sup>Optional</sup> <a name="BillingType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.billingType"></a>

```go
BillingType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#billing_type ExpressRoutePort#billing_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#id ExpressRoutePort#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.identity"></a>

```go
Identity ExpressRoutePortIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#identity ExpressRoutePort#identity}

---

##### `Link1`<sup>Optional</sup> <a name="Link1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link1"></a>

```go
Link1 ExpressRoutePortLink1
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

link1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#link1 ExpressRoutePort#link1}

---

##### `Link2`<sup>Optional</sup> <a name="Link2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link2"></a>

```go
Link2 ExpressRoutePortLink2
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

link2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#link2 ExpressRoutePort#link2}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#tags ExpressRoutePort#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.timeouts"></a>

```go
Timeouts ExpressRoutePortTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#timeouts ExpressRoutePort#timeouts}

---

### ExpressRoutePortIdentity <a name="ExpressRoutePortIdentity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteport"

&expressrouteport.ExpressRoutePortIdentity {
	IdentityIds: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#identity_ids ExpressRoutePort#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#type ExpressRoutePort#type}. |

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#identity_ids ExpressRoutePort#identity_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#type ExpressRoutePort#type}.

---

### ExpressRoutePortLink1 <a name="ExpressRoutePortLink1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteport"

&expressrouteport.ExpressRoutePortLink1 {
	AdminEnabled: interface{},
	MacsecCakKeyvaultSecretId: *string,
	MacsecCipher: *string,
	MacsecCknKeyvaultSecretId: *string,
	MacsecSciEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.adminEnabled">AdminEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCakKeyvaultSecretId">MacsecCakKeyvaultSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCipher">MacsecCipher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCknKeyvaultSecretId">MacsecCknKeyvaultSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecSciEnabled">MacsecSciEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}. |

---

##### `AdminEnabled`<sup>Optional</sup> <a name="AdminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.adminEnabled"></a>

```go
AdminEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}.

---

##### `MacsecCakKeyvaultSecretId`<sup>Optional</sup> <a name="MacsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCakKeyvaultSecretId"></a>

```go
MacsecCakKeyvaultSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}.

---

##### `MacsecCipher`<sup>Optional</sup> <a name="MacsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCipher"></a>

```go
MacsecCipher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}.

---

##### `MacsecCknKeyvaultSecretId`<sup>Optional</sup> <a name="MacsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCknKeyvaultSecretId"></a>

```go
MacsecCknKeyvaultSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}.

---

##### `MacsecSciEnabled`<sup>Optional</sup> <a name="MacsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecSciEnabled"></a>

```go
MacsecSciEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}.

---

### ExpressRoutePortLink2 <a name="ExpressRoutePortLink2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteport"

&expressrouteport.ExpressRoutePortLink2 {
	AdminEnabled: interface{},
	MacsecCakKeyvaultSecretId: *string,
	MacsecCipher: *string,
	MacsecCknKeyvaultSecretId: *string,
	MacsecSciEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.adminEnabled">AdminEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCakKeyvaultSecretId">MacsecCakKeyvaultSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCipher">MacsecCipher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCknKeyvaultSecretId">MacsecCknKeyvaultSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecSciEnabled">MacsecSciEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}. |

---

##### `AdminEnabled`<sup>Optional</sup> <a name="AdminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.adminEnabled"></a>

```go
AdminEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}.

---

##### `MacsecCakKeyvaultSecretId`<sup>Optional</sup> <a name="MacsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCakKeyvaultSecretId"></a>

```go
MacsecCakKeyvaultSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}.

---

##### `MacsecCipher`<sup>Optional</sup> <a name="MacsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCipher"></a>

```go
MacsecCipher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}.

---

##### `MacsecCknKeyvaultSecretId`<sup>Optional</sup> <a name="MacsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCknKeyvaultSecretId"></a>

```go
MacsecCknKeyvaultSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}.

---

##### `MacsecSciEnabled`<sup>Optional</sup> <a name="MacsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecSciEnabled"></a>

```go
MacsecSciEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}.

---

### ExpressRoutePortTimeouts <a name="ExpressRoutePortTimeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteport"

&expressrouteport.ExpressRoutePortTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#create ExpressRoutePort#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#delete ExpressRoutePort#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#read ExpressRoutePort#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#update ExpressRoutePort#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#create ExpressRoutePort#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#delete ExpressRoutePort#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#read ExpressRoutePort#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/express_route_port#update ExpressRoutePort#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRoutePortIdentityOutputReference <a name="ExpressRoutePortIdentityOutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteport"

expressrouteport.NewExpressRoutePortIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExpressRoutePortIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() ExpressRoutePortIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

---


### ExpressRoutePortLink1OutputReference <a name="ExpressRoutePortLink1OutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteport"

expressrouteport.NewExpressRoutePortLink1OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExpressRoutePortLink1OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetAdminEnabled">ResetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCakKeyvaultSecretId">ResetMacsecCakKeyvaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCipher">ResetMacsecCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCknKeyvaultSecretId">ResetMacsecCknKeyvaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecSciEnabled">ResetMacsecSciEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminEnabled` <a name="ResetAdminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetAdminEnabled"></a>

```go
func ResetAdminEnabled()
```

##### `ResetMacsecCakKeyvaultSecretId` <a name="ResetMacsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCakKeyvaultSecretId"></a>

```go
func ResetMacsecCakKeyvaultSecretId()
```

##### `ResetMacsecCipher` <a name="ResetMacsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCipher"></a>

```go
func ResetMacsecCipher()
```

##### `ResetMacsecCknKeyvaultSecretId` <a name="ResetMacsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCknKeyvaultSecretId"></a>

```go
func ResetMacsecCknKeyvaultSecretId()
```

##### `ResetMacsecSciEnabled` <a name="ResetMacsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecSciEnabled"></a>

```go
func ResetMacsecSciEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.connectorType">ConnectorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.interfaceName">InterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.patchPanelId">PatchPanelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.rackId">RackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.routerName">RouterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabledInput">AdminEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretIdInput">MacsecCakKeyvaultSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipherInput">MacsecCipherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretIdInput">MacsecCknKeyvaultSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabledInput">MacsecSciEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabled">AdminEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretId">MacsecCakKeyvaultSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipher">MacsecCipher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretId">MacsecCknKeyvaultSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabled">MacsecSciEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.connectorType"></a>

```go
func ConnectorType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.interfaceName"></a>

```go
func InterfaceName() *string
```

- *Type:* *string

---

##### `PatchPanelId`<sup>Required</sup> <a name="PatchPanelId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.patchPanelId"></a>

```go
func PatchPanelId() *string
```

- *Type:* *string

---

##### `RackId`<sup>Required</sup> <a name="RackId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.rackId"></a>

```go
func RackId() *string
```

- *Type:* *string

---

##### `RouterName`<sup>Required</sup> <a name="RouterName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.routerName"></a>

```go
func RouterName() *string
```

- *Type:* *string

---

##### `AdminEnabledInput`<sup>Optional</sup> <a name="AdminEnabledInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabledInput"></a>

```go
func AdminEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MacsecCakKeyvaultSecretIdInput`<sup>Optional</sup> <a name="MacsecCakKeyvaultSecretIdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretIdInput"></a>

```go
func MacsecCakKeyvaultSecretIdInput() *string
```

- *Type:* *string

---

##### `MacsecCipherInput`<sup>Optional</sup> <a name="MacsecCipherInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipherInput"></a>

```go
func MacsecCipherInput() *string
```

- *Type:* *string

---

##### `MacsecCknKeyvaultSecretIdInput`<sup>Optional</sup> <a name="MacsecCknKeyvaultSecretIdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretIdInput"></a>

```go
func MacsecCknKeyvaultSecretIdInput() *string
```

- *Type:* *string

---

##### `MacsecSciEnabledInput`<sup>Optional</sup> <a name="MacsecSciEnabledInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabledInput"></a>

```go
func MacsecSciEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AdminEnabled`<sup>Required</sup> <a name="AdminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabled"></a>

```go
func AdminEnabled() interface{}
```

- *Type:* interface{}

---

##### `MacsecCakKeyvaultSecretId`<sup>Required</sup> <a name="MacsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretId"></a>

```go
func MacsecCakKeyvaultSecretId() *string
```

- *Type:* *string

---

##### `MacsecCipher`<sup>Required</sup> <a name="MacsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipher"></a>

```go
func MacsecCipher() *string
```

- *Type:* *string

---

##### `MacsecCknKeyvaultSecretId`<sup>Required</sup> <a name="MacsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretId"></a>

```go
func MacsecCknKeyvaultSecretId() *string
```

- *Type:* *string

---

##### `MacsecSciEnabled`<sup>Required</sup> <a name="MacsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabled"></a>

```go
func MacsecSciEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.internalValue"></a>

```go
func InternalValue() ExpressRoutePortLink1
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

---


### ExpressRoutePortLink2OutputReference <a name="ExpressRoutePortLink2OutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteport"

expressrouteport.NewExpressRoutePortLink2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExpressRoutePortLink2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetAdminEnabled">ResetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCakKeyvaultSecretId">ResetMacsecCakKeyvaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCipher">ResetMacsecCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCknKeyvaultSecretId">ResetMacsecCknKeyvaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecSciEnabled">ResetMacsecSciEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminEnabled` <a name="ResetAdminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetAdminEnabled"></a>

```go
func ResetAdminEnabled()
```

##### `ResetMacsecCakKeyvaultSecretId` <a name="ResetMacsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCakKeyvaultSecretId"></a>

```go
func ResetMacsecCakKeyvaultSecretId()
```

##### `ResetMacsecCipher` <a name="ResetMacsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCipher"></a>

```go
func ResetMacsecCipher()
```

##### `ResetMacsecCknKeyvaultSecretId` <a name="ResetMacsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCknKeyvaultSecretId"></a>

```go
func ResetMacsecCknKeyvaultSecretId()
```

##### `ResetMacsecSciEnabled` <a name="ResetMacsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecSciEnabled"></a>

```go
func ResetMacsecSciEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.connectorType">ConnectorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.interfaceName">InterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.patchPanelId">PatchPanelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.rackId">RackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.routerName">RouterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabledInput">AdminEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretIdInput">MacsecCakKeyvaultSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipherInput">MacsecCipherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretIdInput">MacsecCknKeyvaultSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabledInput">MacsecSciEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabled">AdminEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretId">MacsecCakKeyvaultSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipher">MacsecCipher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretId">MacsecCknKeyvaultSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabled">MacsecSciEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.connectorType"></a>

```go
func ConnectorType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.interfaceName"></a>

```go
func InterfaceName() *string
```

- *Type:* *string

---

##### `PatchPanelId`<sup>Required</sup> <a name="PatchPanelId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.patchPanelId"></a>

```go
func PatchPanelId() *string
```

- *Type:* *string

---

##### `RackId`<sup>Required</sup> <a name="RackId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.rackId"></a>

```go
func RackId() *string
```

- *Type:* *string

---

##### `RouterName`<sup>Required</sup> <a name="RouterName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.routerName"></a>

```go
func RouterName() *string
```

- *Type:* *string

---

##### `AdminEnabledInput`<sup>Optional</sup> <a name="AdminEnabledInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabledInput"></a>

```go
func AdminEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MacsecCakKeyvaultSecretIdInput`<sup>Optional</sup> <a name="MacsecCakKeyvaultSecretIdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretIdInput"></a>

```go
func MacsecCakKeyvaultSecretIdInput() *string
```

- *Type:* *string

---

##### `MacsecCipherInput`<sup>Optional</sup> <a name="MacsecCipherInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipherInput"></a>

```go
func MacsecCipherInput() *string
```

- *Type:* *string

---

##### `MacsecCknKeyvaultSecretIdInput`<sup>Optional</sup> <a name="MacsecCknKeyvaultSecretIdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretIdInput"></a>

```go
func MacsecCknKeyvaultSecretIdInput() *string
```

- *Type:* *string

---

##### `MacsecSciEnabledInput`<sup>Optional</sup> <a name="MacsecSciEnabledInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabledInput"></a>

```go
func MacsecSciEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AdminEnabled`<sup>Required</sup> <a name="AdminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabled"></a>

```go
func AdminEnabled() interface{}
```

- *Type:* interface{}

---

##### `MacsecCakKeyvaultSecretId`<sup>Required</sup> <a name="MacsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretId"></a>

```go
func MacsecCakKeyvaultSecretId() *string
```

- *Type:* *string

---

##### `MacsecCipher`<sup>Required</sup> <a name="MacsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipher"></a>

```go
func MacsecCipher() *string
```

- *Type:* *string

---

##### `MacsecCknKeyvaultSecretId`<sup>Required</sup> <a name="MacsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretId"></a>

```go
func MacsecCknKeyvaultSecretId() *string
```

- *Type:* *string

---

##### `MacsecSciEnabled`<sup>Required</sup> <a name="MacsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabled"></a>

```go
func MacsecSciEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.internalValue"></a>

```go
func InternalValue() ExpressRoutePortLink2
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

---


### ExpressRoutePortTimeoutsOutputReference <a name="ExpressRoutePortTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteport"

expressrouteport.NewExpressRoutePortTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExpressRoutePortTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



