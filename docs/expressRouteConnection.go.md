# `expressRouteConnection` Submodule <a name="`expressRouteConnection` Submodule" id="@cdktf/provider-azurerm.expressRouteConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRouteConnection <a name="ExpressRouteConnection" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection azurerm_express_route_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteconnection"

expressrouteconnection.NewExpressRouteConnection(scope Construct, id *string, config ExpressRouteConnectionConfig) ExpressRouteConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig">ExpressRouteConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig">ExpressRouteConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.putRouting">PutRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetAuthorizationKey">ResetAuthorizationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetEnableInternetSecurity">ResetEnableInternetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetExpressRouteGatewayBypassEnabled">ResetExpressRouteGatewayBypassEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetRouting">ResetRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetRoutingWeight">ResetRoutingWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRouting` <a name="PutRouting" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.putRouting"></a>

```go
func PutRouting(value ExpressRouteConnectionRouting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting">ExpressRouteConnectionRouting</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.putTimeouts"></a>

```go
func PutTimeouts(value ExpressRouteConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts">ExpressRouteConnectionTimeouts</a>

---

##### `ResetAuthorizationKey` <a name="ResetAuthorizationKey" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetAuthorizationKey"></a>

```go
func ResetAuthorizationKey()
```

##### `ResetEnableInternetSecurity` <a name="ResetEnableInternetSecurity" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetEnableInternetSecurity"></a>

```go
func ResetEnableInternetSecurity()
```

##### `ResetExpressRouteGatewayBypassEnabled` <a name="ResetExpressRouteGatewayBypassEnabled" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetExpressRouteGatewayBypassEnabled"></a>

```go
func ResetExpressRouteGatewayBypassEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetRouting` <a name="ResetRouting" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetRouting"></a>

```go
func ResetRouting()
```

##### `ResetRoutingWeight` <a name="ResetRoutingWeight" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetRoutingWeight"></a>

```go
func ResetRoutingWeight()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ExpressRouteConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteconnection"

expressrouteconnection.ExpressRouteConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteconnection"

expressrouteconnection.ExpressRouteConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteconnection"

expressrouteconnection.ExpressRouteConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteconnection"

expressrouteconnection.ExpressRouteConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ExpressRouteConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ExpressRouteConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ExpressRouteConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ExpressRouteConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.routing">Routing</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference">ExpressRouteConnectionRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference">ExpressRouteConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.authorizationKeyInput">AuthorizationKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.enableInternetSecurityInput">EnableInternetSecurityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteCircuitPeeringIdInput">ExpressRouteCircuitPeeringIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteGatewayBypassEnabledInput">ExpressRouteGatewayBypassEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteGatewayIdInput">ExpressRouteGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.routingInput">RoutingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting">ExpressRouteConnectionRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.routingWeightInput">RoutingWeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.authorizationKey">AuthorizationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.enableInternetSecurity">EnableInternetSecurity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteCircuitPeeringId">ExpressRouteCircuitPeeringId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteGatewayBypassEnabled">ExpressRouteGatewayBypassEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteGatewayId">ExpressRouteGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.routingWeight">RoutingWeight</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Routing`<sup>Required</sup> <a name="Routing" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.routing"></a>

```go
func Routing() ExpressRouteConnectionRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference">ExpressRouteConnectionRoutingOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.timeouts"></a>

```go
func Timeouts() ExpressRouteConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference">ExpressRouteConnectionTimeoutsOutputReference</a>

---

##### `AuthorizationKeyInput`<sup>Optional</sup> <a name="AuthorizationKeyInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.authorizationKeyInput"></a>

```go
func AuthorizationKeyInput() *string
```

- *Type:* *string

---

##### `EnableInternetSecurityInput`<sup>Optional</sup> <a name="EnableInternetSecurityInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.enableInternetSecurityInput"></a>

```go
func EnableInternetSecurityInput() interface{}
```

- *Type:* interface{}

---

##### `ExpressRouteCircuitPeeringIdInput`<sup>Optional</sup> <a name="ExpressRouteCircuitPeeringIdInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteCircuitPeeringIdInput"></a>

```go
func ExpressRouteCircuitPeeringIdInput() *string
```

- *Type:* *string

---

##### `ExpressRouteGatewayBypassEnabledInput`<sup>Optional</sup> <a name="ExpressRouteGatewayBypassEnabledInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteGatewayBypassEnabledInput"></a>

```go
func ExpressRouteGatewayBypassEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExpressRouteGatewayIdInput`<sup>Optional</sup> <a name="ExpressRouteGatewayIdInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteGatewayIdInput"></a>

```go
func ExpressRouteGatewayIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RoutingInput`<sup>Optional</sup> <a name="RoutingInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.routingInput"></a>

```go
func RoutingInput() ExpressRouteConnectionRouting
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting">ExpressRouteConnectionRouting</a>

---

##### `RoutingWeightInput`<sup>Optional</sup> <a name="RoutingWeightInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.routingWeightInput"></a>

```go
func RoutingWeightInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizationKey`<sup>Required</sup> <a name="AuthorizationKey" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.authorizationKey"></a>

```go
func AuthorizationKey() *string
```

- *Type:* *string

---

##### `EnableInternetSecurity`<sup>Required</sup> <a name="EnableInternetSecurity" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.enableInternetSecurity"></a>

```go
func EnableInternetSecurity() interface{}
```

- *Type:* interface{}

---

##### `ExpressRouteCircuitPeeringId`<sup>Required</sup> <a name="ExpressRouteCircuitPeeringId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteCircuitPeeringId"></a>

```go
func ExpressRouteCircuitPeeringId() *string
```

- *Type:* *string

---

##### `ExpressRouteGatewayBypassEnabled`<sup>Required</sup> <a name="ExpressRouteGatewayBypassEnabled" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteGatewayBypassEnabled"></a>

```go
func ExpressRouteGatewayBypassEnabled() interface{}
```

- *Type:* interface{}

---

##### `ExpressRouteGatewayId`<sup>Required</sup> <a name="ExpressRouteGatewayId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.expressRouteGatewayId"></a>

```go
func ExpressRouteGatewayId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoutingWeight`<sup>Required</sup> <a name="RoutingWeight" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.routingWeight"></a>

```go
func RoutingWeight() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRouteConnectionConfig <a name="ExpressRouteConnectionConfig" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteconnection"

&expressrouteconnection.ExpressRouteConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExpressRouteCircuitPeeringId: *string,
	ExpressRouteGatewayId: *string,
	Name: *string,
	AuthorizationKey: *string,
	EnableInternetSecurity: interface{},
	ExpressRouteGatewayBypassEnabled: interface{},
	Id: *string,
	Routing: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.expressRouteConnection.ExpressRouteConnectionRouting,
	RoutingWeight: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.expressRouteCircuitPeeringId">ExpressRouteCircuitPeeringId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#express_route_circuit_peering_id ExpressRouteConnection#express_route_circuit_peering_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.expressRouteGatewayId">ExpressRouteGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#express_route_gateway_id ExpressRouteConnection#express_route_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#name ExpressRouteConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.authorizationKey">AuthorizationKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#authorization_key ExpressRouteConnection#authorization_key}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.enableInternetSecurity">EnableInternetSecurity</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#enable_internet_security ExpressRouteConnection#enable_internet_security}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.expressRouteGatewayBypassEnabled">ExpressRouteGatewayBypassEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#express_route_gateway_bypass_enabled ExpressRouteConnection#express_route_gateway_bypass_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#id ExpressRouteConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.routing">Routing</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting">ExpressRouteConnectionRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.routingWeight">RoutingWeight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#routing_weight ExpressRouteConnection#routing_weight}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts">ExpressRouteConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExpressRouteCircuitPeeringId`<sup>Required</sup> <a name="ExpressRouteCircuitPeeringId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.expressRouteCircuitPeeringId"></a>

```go
ExpressRouteCircuitPeeringId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#express_route_circuit_peering_id ExpressRouteConnection#express_route_circuit_peering_id}.

---

##### `ExpressRouteGatewayId`<sup>Required</sup> <a name="ExpressRouteGatewayId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.expressRouteGatewayId"></a>

```go
ExpressRouteGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#express_route_gateway_id ExpressRouteConnection#express_route_gateway_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#name ExpressRouteConnection#name}.

---

##### `AuthorizationKey`<sup>Optional</sup> <a name="AuthorizationKey" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.authorizationKey"></a>

```go
AuthorizationKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#authorization_key ExpressRouteConnection#authorization_key}.

---

##### `EnableInternetSecurity`<sup>Optional</sup> <a name="EnableInternetSecurity" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.enableInternetSecurity"></a>

```go
EnableInternetSecurity interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#enable_internet_security ExpressRouteConnection#enable_internet_security}.

---

##### `ExpressRouteGatewayBypassEnabled`<sup>Optional</sup> <a name="ExpressRouteGatewayBypassEnabled" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.expressRouteGatewayBypassEnabled"></a>

```go
ExpressRouteGatewayBypassEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#express_route_gateway_bypass_enabled ExpressRouteConnection#express_route_gateway_bypass_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#id ExpressRouteConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Routing`<sup>Optional</sup> <a name="Routing" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.routing"></a>

```go
Routing ExpressRouteConnectionRouting
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting">ExpressRouteConnectionRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#routing ExpressRouteConnection#routing}

---

##### `RoutingWeight`<sup>Optional</sup> <a name="RoutingWeight" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.routingWeight"></a>

```go
RoutingWeight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#routing_weight ExpressRouteConnection#routing_weight}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionConfig.property.timeouts"></a>

```go
Timeouts ExpressRouteConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts">ExpressRouteConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#timeouts ExpressRouteConnection#timeouts}

---

### ExpressRouteConnectionRouting <a name="ExpressRouteConnectionRouting" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteconnection"

&expressrouteconnection.ExpressRouteConnectionRouting {
	AssociatedRouteTableId: *string,
	InboundRouteMapId: *string,
	OutboundRouteMapId: *string,
	PropagatedRouteTable: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.property.associatedRouteTableId">AssociatedRouteTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#associated_route_table_id ExpressRouteConnection#associated_route_table_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.property.inboundRouteMapId">InboundRouteMapId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#inbound_route_map_id ExpressRouteConnection#inbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.property.outboundRouteMapId">OutboundRouteMapId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#outbound_route_map_id ExpressRouteConnection#outbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.property.propagatedRouteTable">PropagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable">ExpressRouteConnectionRoutingPropagatedRouteTable</a></code> | propagated_route_table block. |

---

##### `AssociatedRouteTableId`<sup>Optional</sup> <a name="AssociatedRouteTableId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.property.associatedRouteTableId"></a>

```go
AssociatedRouteTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#associated_route_table_id ExpressRouteConnection#associated_route_table_id}.

---

##### `InboundRouteMapId`<sup>Optional</sup> <a name="InboundRouteMapId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.property.inboundRouteMapId"></a>

```go
InboundRouteMapId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#inbound_route_map_id ExpressRouteConnection#inbound_route_map_id}.

---

##### `OutboundRouteMapId`<sup>Optional</sup> <a name="OutboundRouteMapId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.property.outboundRouteMapId"></a>

```go
OutboundRouteMapId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#outbound_route_map_id ExpressRouteConnection#outbound_route_map_id}.

---

##### `PropagatedRouteTable`<sup>Optional</sup> <a name="PropagatedRouteTable" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting.property.propagatedRouteTable"></a>

```go
PropagatedRouteTable ExpressRouteConnectionRoutingPropagatedRouteTable
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable">ExpressRouteConnectionRoutingPropagatedRouteTable</a>

propagated_route_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#propagated_route_table ExpressRouteConnection#propagated_route_table}

---

### ExpressRouteConnectionRoutingPropagatedRouteTable <a name="ExpressRouteConnectionRoutingPropagatedRouteTable" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteconnection"

&expressrouteconnection.ExpressRouteConnectionRoutingPropagatedRouteTable {
	Labels: *[]*string,
	RouteTableIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable.property.labels">Labels</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#labels ExpressRouteConnection#labels}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable.property.routeTableIds">RouteTableIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#route_table_ids ExpressRouteConnection#route_table_ids}. |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable.property.labels"></a>

```go
Labels *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#labels ExpressRouteConnection#labels}.

---

##### `RouteTableIds`<sup>Optional</sup> <a name="RouteTableIds" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable.property.routeTableIds"></a>

```go
RouteTableIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#route_table_ids ExpressRouteConnection#route_table_ids}.

---

### ExpressRouteConnectionTimeouts <a name="ExpressRouteConnectionTimeouts" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteconnection"

&expressrouteconnection.ExpressRouteConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#create ExpressRouteConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#delete ExpressRouteConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#read ExpressRouteConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#update ExpressRouteConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#create ExpressRouteConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#delete ExpressRouteConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#read ExpressRouteConnection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/express_route_connection#update ExpressRouteConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRouteConnectionRoutingOutputReference <a name="ExpressRouteConnectionRoutingOutputReference" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteconnection"

expressrouteconnection.NewExpressRouteConnectionRoutingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExpressRouteConnectionRoutingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.putPropagatedRouteTable">PutPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resetAssociatedRouteTableId">ResetAssociatedRouteTableId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resetInboundRouteMapId">ResetInboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resetOutboundRouteMapId">ResetOutboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resetPropagatedRouteTable">ResetPropagatedRouteTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPropagatedRouteTable` <a name="PutPropagatedRouteTable" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.putPropagatedRouteTable"></a>

```go
func PutPropagatedRouteTable(value ExpressRouteConnectionRoutingPropagatedRouteTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.putPropagatedRouteTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable">ExpressRouteConnectionRoutingPropagatedRouteTable</a>

---

##### `ResetAssociatedRouteTableId` <a name="ResetAssociatedRouteTableId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resetAssociatedRouteTableId"></a>

```go
func ResetAssociatedRouteTableId()
```

##### `ResetInboundRouteMapId` <a name="ResetInboundRouteMapId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resetInboundRouteMapId"></a>

```go
func ResetInboundRouteMapId()
```

##### `ResetOutboundRouteMapId` <a name="ResetOutboundRouteMapId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resetOutboundRouteMapId"></a>

```go
func ResetOutboundRouteMapId()
```

##### `ResetPropagatedRouteTable` <a name="ResetPropagatedRouteTable" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.resetPropagatedRouteTable"></a>

```go
func ResetPropagatedRouteTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.propagatedRouteTable">PropagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference">ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.associatedRouteTableIdInput">AssociatedRouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.inboundRouteMapIdInput">InboundRouteMapIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.outboundRouteMapIdInput">OutboundRouteMapIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.propagatedRouteTableInput">PropagatedRouteTableInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable">ExpressRouteConnectionRoutingPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.associatedRouteTableId">AssociatedRouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.inboundRouteMapId">InboundRouteMapId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.outboundRouteMapId">OutboundRouteMapId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting">ExpressRouteConnectionRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropagatedRouteTable`<sup>Required</sup> <a name="PropagatedRouteTable" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.propagatedRouteTable"></a>

```go
func PropagatedRouteTable() ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference">ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference</a>

---

##### `AssociatedRouteTableIdInput`<sup>Optional</sup> <a name="AssociatedRouteTableIdInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.associatedRouteTableIdInput"></a>

```go
func AssociatedRouteTableIdInput() *string
```

- *Type:* *string

---

##### `InboundRouteMapIdInput`<sup>Optional</sup> <a name="InboundRouteMapIdInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.inboundRouteMapIdInput"></a>

```go
func InboundRouteMapIdInput() *string
```

- *Type:* *string

---

##### `OutboundRouteMapIdInput`<sup>Optional</sup> <a name="OutboundRouteMapIdInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.outboundRouteMapIdInput"></a>

```go
func OutboundRouteMapIdInput() *string
```

- *Type:* *string

---

##### `PropagatedRouteTableInput`<sup>Optional</sup> <a name="PropagatedRouteTableInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.propagatedRouteTableInput"></a>

```go
func PropagatedRouteTableInput() ExpressRouteConnectionRoutingPropagatedRouteTable
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable">ExpressRouteConnectionRoutingPropagatedRouteTable</a>

---

##### `AssociatedRouteTableId`<sup>Required</sup> <a name="AssociatedRouteTableId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.associatedRouteTableId"></a>

```go
func AssociatedRouteTableId() *string
```

- *Type:* *string

---

##### `InboundRouteMapId`<sup>Required</sup> <a name="InboundRouteMapId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.inboundRouteMapId"></a>

```go
func InboundRouteMapId() *string
```

- *Type:* *string

---

##### `OutboundRouteMapId`<sup>Required</sup> <a name="OutboundRouteMapId" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.outboundRouteMapId"></a>

```go
func OutboundRouteMapId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingOutputReference.property.internalValue"></a>

```go
func InternalValue() ExpressRouteConnectionRouting
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRouting">ExpressRouteConnectionRouting</a>

---


### ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference <a name="ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteconnection"

expressrouteconnection.NewExpressRouteConnectionRoutingPropagatedRouteTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.resetRouteTableIds">ResetRouteTableIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetRouteTableIds` <a name="ResetRouteTableIds" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.resetRouteTableIds"></a>

```go
func ResetRouteTableIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIdsInput">RouteTableIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIds">RouteTableIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable">ExpressRouteConnectionRoutingPropagatedRouteTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RouteTableIdsInput`<sup>Optional</sup> <a name="RouteTableIdsInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIdsInput"></a>

```go
func RouteTableIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `RouteTableIds`<sup>Required</sup> <a name="RouteTableIds" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIds"></a>

```go
func RouteTableIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference.property.internalValue"></a>

```go
func InternalValue() ExpressRouteConnectionRoutingPropagatedRouteTable
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionRoutingPropagatedRouteTable">ExpressRouteConnectionRoutingPropagatedRouteTable</a>

---


### ExpressRouteConnectionTimeoutsOutputReference <a name="ExpressRouteConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/expressrouteconnection"

expressrouteconnection.NewExpressRouteConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExpressRouteConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRouteConnection.ExpressRouteConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



