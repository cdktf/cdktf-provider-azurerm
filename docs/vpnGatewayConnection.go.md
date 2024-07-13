# `vpnGatewayConnection` Submodule <a name="`vpnGatewayConnection` Submodule" id="@cdktf/provider-azurerm.vpnGatewayConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnGatewayConnection <a name="VpnGatewayConnection" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection azurerm_vpn_gateway_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

vpngatewayconnection.NewVpnGatewayConnection(scope Construct, id *string, config VpnGatewayConnectionConfig) VpnGatewayConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig">VpnGatewayConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig">VpnGatewayConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putRouting">PutRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTrafficSelectorPolicy">PutTrafficSelectorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putVpnLink">PutVpnLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetInternetSecurityEnabled">ResetInternetSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetRouting">ResetRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetTrafficSelectorPolicy">ResetTrafficSelectorPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRouting` <a name="PutRouting" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putRouting"></a>

```go
func PutRouting(value VpnGatewayConnectionRouting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTimeouts"></a>

```go
func PutTimeouts(value VpnGatewayConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a>

---

##### `PutTrafficSelectorPolicy` <a name="PutTrafficSelectorPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTrafficSelectorPolicy"></a>

```go
func PutTrafficSelectorPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTrafficSelectorPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVpnLink` <a name="PutVpnLink" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putVpnLink"></a>

```go
func PutVpnLink(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putVpnLink.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetInternetSecurityEnabled` <a name="ResetInternetSecurityEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetInternetSecurityEnabled"></a>

```go
func ResetInternetSecurityEnabled()
```

##### `ResetRouting` <a name="ResetRouting" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetRouting"></a>

```go
func ResetRouting()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTrafficSelectorPolicy` <a name="ResetTrafficSelectorPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetTrafficSelectorPolicy"></a>

```go
func ResetTrafficSelectorPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpnGatewayConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

vpngatewayconnection.VpnGatewayConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

vpngatewayconnection.VpnGatewayConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

vpngatewayconnection.VpnGatewayConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

vpngatewayconnection.VpnGatewayConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VpnGatewayConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpnGatewayConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpnGatewayConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VpnGatewayConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.routing">Routing</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference">VpnGatewayConnectionRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference">VpnGatewayConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.trafficSelectorPolicy">TrafficSelectorPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList">VpnGatewayConnectionTrafficSelectorPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnLink">VpnLink</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList">VpnGatewayConnectionVpnLinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.internetSecurityEnabledInput">InternetSecurityEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.remoteVpnSiteIdInput">RemoteVpnSiteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.routingInput">RoutingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.trafficSelectorPolicyInput">TrafficSelectorPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnGatewayIdInput">VpnGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnLinkInput">VpnLinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.internetSecurityEnabled">InternetSecurityEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.remoteVpnSiteId">RemoteVpnSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnGatewayId">VpnGatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Routing`<sup>Required</sup> <a name="Routing" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.routing"></a>

```go
func Routing() VpnGatewayConnectionRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference">VpnGatewayConnectionRoutingOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.timeouts"></a>

```go
func Timeouts() VpnGatewayConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference">VpnGatewayConnectionTimeoutsOutputReference</a>

---

##### `TrafficSelectorPolicy`<sup>Required</sup> <a name="TrafficSelectorPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.trafficSelectorPolicy"></a>

```go
func TrafficSelectorPolicy() VpnGatewayConnectionTrafficSelectorPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList">VpnGatewayConnectionTrafficSelectorPolicyList</a>

---

##### `VpnLink`<sup>Required</sup> <a name="VpnLink" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnLink"></a>

```go
func VpnLink() VpnGatewayConnectionVpnLinkList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList">VpnGatewayConnectionVpnLinkList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InternetSecurityEnabledInput`<sup>Optional</sup> <a name="InternetSecurityEnabledInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.internetSecurityEnabledInput"></a>

```go
func InternetSecurityEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RemoteVpnSiteIdInput`<sup>Optional</sup> <a name="RemoteVpnSiteIdInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.remoteVpnSiteIdInput"></a>

```go
func RemoteVpnSiteIdInput() *string
```

- *Type:* *string

---

##### `RoutingInput`<sup>Optional</sup> <a name="RoutingInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.routingInput"></a>

```go
func RoutingInput() VpnGatewayConnectionRouting
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficSelectorPolicyInput`<sup>Optional</sup> <a name="TrafficSelectorPolicyInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.trafficSelectorPolicyInput"></a>

```go
func TrafficSelectorPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `VpnGatewayIdInput`<sup>Optional</sup> <a name="VpnGatewayIdInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnGatewayIdInput"></a>

```go
func VpnGatewayIdInput() *string
```

- *Type:* *string

---

##### `VpnLinkInput`<sup>Optional</sup> <a name="VpnLinkInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnLinkInput"></a>

```go
func VpnLinkInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternetSecurityEnabled`<sup>Required</sup> <a name="InternetSecurityEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.internetSecurityEnabled"></a>

```go
func InternetSecurityEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RemoteVpnSiteId`<sup>Required</sup> <a name="RemoteVpnSiteId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.remoteVpnSiteId"></a>

```go
func RemoteVpnSiteId() *string
```

- *Type:* *string

---

##### `VpnGatewayId`<sup>Required</sup> <a name="VpnGatewayId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnGatewayId"></a>

```go
func VpnGatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnGatewayConnectionConfig <a name="VpnGatewayConnectionConfig" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

&vpngatewayconnection.VpnGatewayConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RemoteVpnSiteId: *string,
	VpnGatewayId: *string,
	VpnLink: interface{},
	Id: *string,
	InternetSecurityEnabled: interface{},
	Routing: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.vpnGatewayConnection.VpnGatewayConnectionRouting,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.vpnGatewayConnection.VpnGatewayConnectionTimeouts,
	TrafficSelectorPolicy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#name VpnGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.remoteVpnSiteId">RemoteVpnSiteId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#remote_vpn_site_id VpnGatewayConnection#remote_vpn_site_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.vpnGatewayId">VpnGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#vpn_gateway_id VpnGatewayConnection#vpn_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.vpnLink">VpnLink</a></code> | <code>interface{}</code> | vpn_link block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#id VpnGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.internetSecurityEnabled">InternetSecurityEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#internet_security_enabled VpnGatewayConnection#internet_security_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.routing">Routing</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.trafficSelectorPolicy">TrafficSelectorPolicy</a></code> | <code>interface{}</code> | traffic_selector_policy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#name VpnGatewayConnection#name}.

---

##### `RemoteVpnSiteId`<sup>Required</sup> <a name="RemoteVpnSiteId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.remoteVpnSiteId"></a>

```go
RemoteVpnSiteId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#remote_vpn_site_id VpnGatewayConnection#remote_vpn_site_id}.

---

##### `VpnGatewayId`<sup>Required</sup> <a name="VpnGatewayId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.vpnGatewayId"></a>

```go
VpnGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#vpn_gateway_id VpnGatewayConnection#vpn_gateway_id}.

---

##### `VpnLink`<sup>Required</sup> <a name="VpnLink" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.vpnLink"></a>

```go
VpnLink interface{}
```

- *Type:* interface{}

vpn_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#vpn_link VpnGatewayConnection#vpn_link}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#id VpnGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternetSecurityEnabled`<sup>Optional</sup> <a name="InternetSecurityEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.internetSecurityEnabled"></a>

```go
InternetSecurityEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#internet_security_enabled VpnGatewayConnection#internet_security_enabled}.

---

##### `Routing`<sup>Optional</sup> <a name="Routing" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.routing"></a>

```go
Routing VpnGatewayConnectionRouting
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#routing VpnGatewayConnection#routing}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.timeouts"></a>

```go
Timeouts VpnGatewayConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#timeouts VpnGatewayConnection#timeouts}

---

##### `TrafficSelectorPolicy`<sup>Optional</sup> <a name="TrafficSelectorPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.trafficSelectorPolicy"></a>

```go
TrafficSelectorPolicy interface{}
```

- *Type:* interface{}

traffic_selector_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#traffic_selector_policy VpnGatewayConnection#traffic_selector_policy}

---

### VpnGatewayConnectionRouting <a name="VpnGatewayConnectionRouting" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

&vpngatewayconnection.VpnGatewayConnectionRouting {
	AssociatedRouteTable: *string,
	InboundRouteMapId: *string,
	OutboundRouteMapId: *string,
	PropagatedRouteTable: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.associatedRouteTable">AssociatedRouteTable</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#associated_route_table VpnGatewayConnection#associated_route_table}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.inboundRouteMapId">InboundRouteMapId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#inbound_route_map_id VpnGatewayConnection#inbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.outboundRouteMapId">OutboundRouteMapId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#outbound_route_map_id VpnGatewayConnection#outbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.propagatedRouteTable">PropagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a></code> | propagated_route_table block. |

---

##### `AssociatedRouteTable`<sup>Required</sup> <a name="AssociatedRouteTable" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.associatedRouteTable"></a>

```go
AssociatedRouteTable *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#associated_route_table VpnGatewayConnection#associated_route_table}.

---

##### `InboundRouteMapId`<sup>Optional</sup> <a name="InboundRouteMapId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.inboundRouteMapId"></a>

```go
InboundRouteMapId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#inbound_route_map_id VpnGatewayConnection#inbound_route_map_id}.

---

##### `OutboundRouteMapId`<sup>Optional</sup> <a name="OutboundRouteMapId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.outboundRouteMapId"></a>

```go
OutboundRouteMapId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#outbound_route_map_id VpnGatewayConnection#outbound_route_map_id}.

---

##### `PropagatedRouteTable`<sup>Optional</sup> <a name="PropagatedRouteTable" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.propagatedRouteTable"></a>

```go
PropagatedRouteTable VpnGatewayConnectionRoutingPropagatedRouteTable
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a>

propagated_route_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#propagated_route_table VpnGatewayConnection#propagated_route_table}

---

### VpnGatewayConnectionRoutingPropagatedRouteTable <a name="VpnGatewayConnectionRoutingPropagatedRouteTable" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

&vpngatewayconnection.VpnGatewayConnectionRoutingPropagatedRouteTable {
	RouteTableIds: *[]*string,
	Labels: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable.property.routeTableIds">RouteTableIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#route_table_ids VpnGatewayConnection#route_table_ids}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable.property.labels">Labels</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#labels VpnGatewayConnection#labels}. |

---

##### `RouteTableIds`<sup>Required</sup> <a name="RouteTableIds" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable.property.routeTableIds"></a>

```go
RouteTableIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#route_table_ids VpnGatewayConnection#route_table_ids}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable.property.labels"></a>

```go
Labels *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#labels VpnGatewayConnection#labels}.

---

### VpnGatewayConnectionTimeouts <a name="VpnGatewayConnectionTimeouts" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

&vpngatewayconnection.VpnGatewayConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#create VpnGatewayConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#delete VpnGatewayConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#read VpnGatewayConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#update VpnGatewayConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#create VpnGatewayConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#delete VpnGatewayConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#read VpnGatewayConnection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#update VpnGatewayConnection#update}.

---

### VpnGatewayConnectionTrafficSelectorPolicy <a name="VpnGatewayConnectionTrafficSelectorPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

&vpngatewayconnection.VpnGatewayConnectionTrafficSelectorPolicy {
	LocalAddressRanges: *[]*string,
	RemoteAddressRanges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy.property.localAddressRanges">LocalAddressRanges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#local_address_ranges VpnGatewayConnection#local_address_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy.property.remoteAddressRanges">RemoteAddressRanges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#remote_address_ranges VpnGatewayConnection#remote_address_ranges}. |

---

##### `LocalAddressRanges`<sup>Required</sup> <a name="LocalAddressRanges" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy.property.localAddressRanges"></a>

```go
LocalAddressRanges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#local_address_ranges VpnGatewayConnection#local_address_ranges}.

---

##### `RemoteAddressRanges`<sup>Required</sup> <a name="RemoteAddressRanges" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy.property.remoteAddressRanges"></a>

```go
RemoteAddressRanges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#remote_address_ranges VpnGatewayConnection#remote_address_ranges}.

---

### VpnGatewayConnectionVpnLink <a name="VpnGatewayConnectionVpnLink" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

&vpngatewayconnection.VpnGatewayConnectionVpnLink {
	Name: *string,
	VpnSiteLinkId: *string,
	BandwidthMbps: *f64,
	BgpEnabled: interface{},
	ConnectionMode: *string,
	CustomBgpAddress: interface{},
	EgressNatRuleIds: *[]*string,
	IngressNatRuleIds: *[]*string,
	IpsecPolicy: interface{},
	LocalAzureIpAddressEnabled: interface{},
	PolicyBasedTrafficSelectorEnabled: interface{},
	Protocol: *string,
	RatelimitEnabled: interface{},
	RouteWeight: *f64,
	SharedKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#name VpnGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.vpnSiteLinkId">VpnSiteLinkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#vpn_site_link_id VpnGatewayConnection#vpn_site_link_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.bandwidthMbps">BandwidthMbps</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#bandwidth_mbps VpnGatewayConnection#bandwidth_mbps}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.bgpEnabled">BgpEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#bgp_enabled VpnGatewayConnection#bgp_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.connectionMode">ConnectionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#connection_mode VpnGatewayConnection#connection_mode}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.customBgpAddress">CustomBgpAddress</a></code> | <code>interface{}</code> | custom_bgp_address block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.egressNatRuleIds">EgressNatRuleIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#egress_nat_rule_ids VpnGatewayConnection#egress_nat_rule_ids}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ingressNatRuleIds">IngressNatRuleIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#ingress_nat_rule_ids VpnGatewayConnection#ingress_nat_rule_ids}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ipsecPolicy">IpsecPolicy</a></code> | <code>interface{}</code> | ipsec_policy block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.localAzureIpAddressEnabled">LocalAzureIpAddressEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#local_azure_ip_address_enabled VpnGatewayConnection#local_azure_ip_address_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.policyBasedTrafficSelectorEnabled">PolicyBasedTrafficSelectorEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#policy_based_traffic_selector_enabled VpnGatewayConnection#policy_based_traffic_selector_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#protocol VpnGatewayConnection#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ratelimitEnabled">RatelimitEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#ratelimit_enabled VpnGatewayConnection#ratelimit_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.routeWeight">RouteWeight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#route_weight VpnGatewayConnection#route_weight}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.sharedKey">SharedKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#shared_key VpnGatewayConnection#shared_key}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#name VpnGatewayConnection#name}.

---

##### `VpnSiteLinkId`<sup>Required</sup> <a name="VpnSiteLinkId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.vpnSiteLinkId"></a>

```go
VpnSiteLinkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#vpn_site_link_id VpnGatewayConnection#vpn_site_link_id}.

---

##### `BandwidthMbps`<sup>Optional</sup> <a name="BandwidthMbps" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.bandwidthMbps"></a>

```go
BandwidthMbps *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#bandwidth_mbps VpnGatewayConnection#bandwidth_mbps}.

---

##### `BgpEnabled`<sup>Optional</sup> <a name="BgpEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.bgpEnabled"></a>

```go
BgpEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#bgp_enabled VpnGatewayConnection#bgp_enabled}.

---

##### `ConnectionMode`<sup>Optional</sup> <a name="ConnectionMode" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.connectionMode"></a>

```go
ConnectionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#connection_mode VpnGatewayConnection#connection_mode}.

---

##### `CustomBgpAddress`<sup>Optional</sup> <a name="CustomBgpAddress" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.customBgpAddress"></a>

```go
CustomBgpAddress interface{}
```

- *Type:* interface{}

custom_bgp_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#custom_bgp_address VpnGatewayConnection#custom_bgp_address}

---

##### `EgressNatRuleIds`<sup>Optional</sup> <a name="EgressNatRuleIds" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.egressNatRuleIds"></a>

```go
EgressNatRuleIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#egress_nat_rule_ids VpnGatewayConnection#egress_nat_rule_ids}.

---

##### `IngressNatRuleIds`<sup>Optional</sup> <a name="IngressNatRuleIds" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ingressNatRuleIds"></a>

```go
IngressNatRuleIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#ingress_nat_rule_ids VpnGatewayConnection#ingress_nat_rule_ids}.

---

##### `IpsecPolicy`<sup>Optional</sup> <a name="IpsecPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ipsecPolicy"></a>

```go
IpsecPolicy interface{}
```

- *Type:* interface{}

ipsec_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#ipsec_policy VpnGatewayConnection#ipsec_policy}

---

##### `LocalAzureIpAddressEnabled`<sup>Optional</sup> <a name="LocalAzureIpAddressEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.localAzureIpAddressEnabled"></a>

```go
LocalAzureIpAddressEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#local_azure_ip_address_enabled VpnGatewayConnection#local_azure_ip_address_enabled}.

---

##### `PolicyBasedTrafficSelectorEnabled`<sup>Optional</sup> <a name="PolicyBasedTrafficSelectorEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.policyBasedTrafficSelectorEnabled"></a>

```go
PolicyBasedTrafficSelectorEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#policy_based_traffic_selector_enabled VpnGatewayConnection#policy_based_traffic_selector_enabled}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#protocol VpnGatewayConnection#protocol}.

---

##### `RatelimitEnabled`<sup>Optional</sup> <a name="RatelimitEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ratelimitEnabled"></a>

```go
RatelimitEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#ratelimit_enabled VpnGatewayConnection#ratelimit_enabled}.

---

##### `RouteWeight`<sup>Optional</sup> <a name="RouteWeight" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.routeWeight"></a>

```go
RouteWeight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#route_weight VpnGatewayConnection#route_weight}.

---

##### `SharedKey`<sup>Optional</sup> <a name="SharedKey" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.sharedKey"></a>

```go
SharedKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#shared_key VpnGatewayConnection#shared_key}.

---

### VpnGatewayConnectionVpnLinkCustomBgpAddress <a name="VpnGatewayConnectionVpnLinkCustomBgpAddress" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

&vpngatewayconnection.VpnGatewayConnectionVpnLinkCustomBgpAddress {
	IpAddress: *string,
	IpConfigurationId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress.property.ipAddress">IpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#ip_address VpnGatewayConnection#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress.property.ipConfigurationId">IpConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#ip_configuration_id VpnGatewayConnection#ip_configuration_id}. |

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#ip_address VpnGatewayConnection#ip_address}.

---

##### `IpConfigurationId`<sup>Required</sup> <a name="IpConfigurationId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress.property.ipConfigurationId"></a>

```go
IpConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#ip_configuration_id VpnGatewayConnection#ip_configuration_id}.

---

### VpnGatewayConnectionVpnLinkIpsecPolicy <a name="VpnGatewayConnectionVpnLinkIpsecPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

&vpngatewayconnection.VpnGatewayConnectionVpnLinkIpsecPolicy {
	DhGroup: *string,
	EncryptionAlgorithm: *string,
	IkeEncryptionAlgorithm: *string,
	IkeIntegrityAlgorithm: *string,
	IntegrityAlgorithm: *string,
	PfsGroup: *string,
	SaDataSizeKb: *f64,
	SaLifetimeSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.dhGroup">DhGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#dh_group VpnGatewayConnection#dh_group}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#encryption_algorithm VpnGatewayConnection#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.ikeEncryptionAlgorithm">IkeEncryptionAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#ike_encryption_algorithm VpnGatewayConnection#ike_encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.ikeIntegrityAlgorithm">IkeIntegrityAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#ike_integrity_algorithm VpnGatewayConnection#ike_integrity_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.integrityAlgorithm">IntegrityAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#integrity_algorithm VpnGatewayConnection#integrity_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.pfsGroup">PfsGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#pfs_group VpnGatewayConnection#pfs_group}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.saDataSizeKb">SaDataSizeKb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#sa_data_size_kb VpnGatewayConnection#sa_data_size_kb}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.saLifetimeSec">SaLifetimeSec</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#sa_lifetime_sec VpnGatewayConnection#sa_lifetime_sec}. |

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.dhGroup"></a>

```go
DhGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#dh_group VpnGatewayConnection#dh_group}.

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.encryptionAlgorithm"></a>

```go
EncryptionAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#encryption_algorithm VpnGatewayConnection#encryption_algorithm}.

---

##### `IkeEncryptionAlgorithm`<sup>Required</sup> <a name="IkeEncryptionAlgorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.ikeEncryptionAlgorithm"></a>

```go
IkeEncryptionAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#ike_encryption_algorithm VpnGatewayConnection#ike_encryption_algorithm}.

---

##### `IkeIntegrityAlgorithm`<sup>Required</sup> <a name="IkeIntegrityAlgorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.ikeIntegrityAlgorithm"></a>

```go
IkeIntegrityAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#ike_integrity_algorithm VpnGatewayConnection#ike_integrity_algorithm}.

---

##### `IntegrityAlgorithm`<sup>Required</sup> <a name="IntegrityAlgorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.integrityAlgorithm"></a>

```go
IntegrityAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#integrity_algorithm VpnGatewayConnection#integrity_algorithm}.

---

##### `PfsGroup`<sup>Required</sup> <a name="PfsGroup" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.pfsGroup"></a>

```go
PfsGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#pfs_group VpnGatewayConnection#pfs_group}.

---

##### `SaDataSizeKb`<sup>Required</sup> <a name="SaDataSizeKb" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.saDataSizeKb"></a>

```go
SaDataSizeKb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#sa_data_size_kb VpnGatewayConnection#sa_data_size_kb}.

---

##### `SaLifetimeSec`<sup>Required</sup> <a name="SaLifetimeSec" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.saLifetimeSec"></a>

```go
SaLifetimeSec *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/vpn_gateway_connection#sa_lifetime_sec VpnGatewayConnection#sa_lifetime_sec}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnGatewayConnectionRoutingOutputReference <a name="VpnGatewayConnectionRoutingOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

vpngatewayconnection.NewVpnGatewayConnectionRoutingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpnGatewayConnectionRoutingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.putPropagatedRouteTable">PutPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetInboundRouteMapId">ResetInboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetOutboundRouteMapId">ResetOutboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetPropagatedRouteTable">ResetPropagatedRouteTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPropagatedRouteTable` <a name="PutPropagatedRouteTable" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.putPropagatedRouteTable"></a>

```go
func PutPropagatedRouteTable(value VpnGatewayConnectionRoutingPropagatedRouteTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.putPropagatedRouteTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a>

---

##### `ResetInboundRouteMapId` <a name="ResetInboundRouteMapId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetInboundRouteMapId"></a>

```go
func ResetInboundRouteMapId()
```

##### `ResetOutboundRouteMapId` <a name="ResetOutboundRouteMapId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetOutboundRouteMapId"></a>

```go
func ResetOutboundRouteMapId()
```

##### `ResetPropagatedRouteTable` <a name="ResetPropagatedRouteTable" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetPropagatedRouteTable"></a>

```go
func ResetPropagatedRouteTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.propagatedRouteTable">PropagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference">VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.associatedRouteTableInput">AssociatedRouteTableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.inboundRouteMapIdInput">InboundRouteMapIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.outboundRouteMapIdInput">OutboundRouteMapIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.propagatedRouteTableInput">PropagatedRouteTableInput</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.associatedRouteTable">AssociatedRouteTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.inboundRouteMapId">InboundRouteMapId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.outboundRouteMapId">OutboundRouteMapId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropagatedRouteTable`<sup>Required</sup> <a name="PropagatedRouteTable" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.propagatedRouteTable"></a>

```go
func PropagatedRouteTable() VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference">VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference</a>

---

##### `AssociatedRouteTableInput`<sup>Optional</sup> <a name="AssociatedRouteTableInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.associatedRouteTableInput"></a>

```go
func AssociatedRouteTableInput() *string
```

- *Type:* *string

---

##### `InboundRouteMapIdInput`<sup>Optional</sup> <a name="InboundRouteMapIdInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.inboundRouteMapIdInput"></a>

```go
func InboundRouteMapIdInput() *string
```

- *Type:* *string

---

##### `OutboundRouteMapIdInput`<sup>Optional</sup> <a name="OutboundRouteMapIdInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.outboundRouteMapIdInput"></a>

```go
func OutboundRouteMapIdInput() *string
```

- *Type:* *string

---

##### `PropagatedRouteTableInput`<sup>Optional</sup> <a name="PropagatedRouteTableInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.propagatedRouteTableInput"></a>

```go
func PropagatedRouteTableInput() VpnGatewayConnectionRoutingPropagatedRouteTable
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a>

---

##### `AssociatedRouteTable`<sup>Required</sup> <a name="AssociatedRouteTable" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.associatedRouteTable"></a>

```go
func AssociatedRouteTable() *string
```

- *Type:* *string

---

##### `InboundRouteMapId`<sup>Required</sup> <a name="InboundRouteMapId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.inboundRouteMapId"></a>

```go
func InboundRouteMapId() *string
```

- *Type:* *string

---

##### `OutboundRouteMapId`<sup>Required</sup> <a name="OutboundRouteMapId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.outboundRouteMapId"></a>

```go
func OutboundRouteMapId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.internalValue"></a>

```go
func InternalValue() VpnGatewayConnectionRouting
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a>

---


### VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference <a name="VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

vpngatewayconnection.NewVpnGatewayConnectionRoutingPropagatedRouteTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.resetLabels"></a>

```go
func ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIdsInput">RouteTableIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIds">RouteTableIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RouteTableIdsInput`<sup>Optional</sup> <a name="RouteTableIdsInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIdsInput"></a>

```go
func RouteTableIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `RouteTableIds`<sup>Required</sup> <a name="RouteTableIds" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIds"></a>

```go
func RouteTableIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.internalValue"></a>

```go
func InternalValue() VpnGatewayConnectionRoutingPropagatedRouteTable
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a>

---


### VpnGatewayConnectionTimeoutsOutputReference <a name="VpnGatewayConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

vpngatewayconnection.NewVpnGatewayConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpnGatewayConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnGatewayConnectionTrafficSelectorPolicyList <a name="VpnGatewayConnectionTrafficSelectorPolicyList" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

vpngatewayconnection.NewVpnGatewayConnectionTrafficSelectorPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnGatewayConnectionTrafficSelectorPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.get"></a>

```go
func Get(index *f64) VpnGatewayConnectionTrafficSelectorPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnGatewayConnectionTrafficSelectorPolicyOutputReference <a name="VpnGatewayConnectionTrafficSelectorPolicyOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

vpngatewayconnection.NewVpnGatewayConnectionTrafficSelectorPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnGatewayConnectionTrafficSelectorPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressRangesInput">LocalAddressRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressRangesInput">RemoteAddressRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressRanges">LocalAddressRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressRanges">RemoteAddressRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalAddressRangesInput`<sup>Optional</sup> <a name="LocalAddressRangesInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressRangesInput"></a>

```go
func LocalAddressRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RemoteAddressRangesInput`<sup>Optional</sup> <a name="RemoteAddressRangesInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressRangesInput"></a>

```go
func RemoteAddressRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocalAddressRanges`<sup>Required</sup> <a name="LocalAddressRanges" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressRanges"></a>

```go
func LocalAddressRanges() *[]*string
```

- *Type:* *[]*string

---

##### `RemoteAddressRanges`<sup>Required</sup> <a name="RemoteAddressRanges" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressRanges"></a>

```go
func RemoteAddressRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnGatewayConnectionVpnLinkCustomBgpAddressList <a name="VpnGatewayConnectionVpnLinkCustomBgpAddressList" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

vpngatewayconnection.NewVpnGatewayConnectionVpnLinkCustomBgpAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnGatewayConnectionVpnLinkCustomBgpAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.get"></a>

```go
func Get(index *f64) VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference <a name="VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

vpngatewayconnection.NewVpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipConfigurationIdInput">IpConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipConfigurationId">IpConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `IpConfigurationIdInput`<sup>Optional</sup> <a name="IpConfigurationIdInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipConfigurationIdInput"></a>

```go
func IpConfigurationIdInput() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IpConfigurationId`<sup>Required</sup> <a name="IpConfigurationId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipConfigurationId"></a>

```go
func IpConfigurationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnGatewayConnectionVpnLinkIpsecPolicyList <a name="VpnGatewayConnectionVpnLinkIpsecPolicyList" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

vpngatewayconnection.NewVpnGatewayConnectionVpnLinkIpsecPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnGatewayConnectionVpnLinkIpsecPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.get"></a>

```go
func Get(index *f64) VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference <a name="VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

vpngatewayconnection.NewVpnGatewayConnectionVpnLinkIpsecPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.dhGroupInput">DhGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeEncryptionAlgorithmInput">IkeEncryptionAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeIntegrityAlgorithmInput">IkeIntegrityAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.integrityAlgorithmInput">IntegrityAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.pfsGroupInput">PfsGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saDataSizeKbInput">SaDataSizeKbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saLifetimeSecInput">SaLifetimeSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.dhGroup">DhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeEncryptionAlgorithm">IkeEncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeIntegrityAlgorithm">IkeIntegrityAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.integrityAlgorithm">IntegrityAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.pfsGroup">PfsGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saDataSizeKb">SaDataSizeKb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saLifetimeSec">SaLifetimeSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DhGroupInput`<sup>Optional</sup> <a name="DhGroupInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.dhGroupInput"></a>

```go
func DhGroupInput() *string
```

- *Type:* *string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.encryptionAlgorithmInput"></a>

```go
func EncryptionAlgorithmInput() *string
```

- *Type:* *string

---

##### `IkeEncryptionAlgorithmInput`<sup>Optional</sup> <a name="IkeEncryptionAlgorithmInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeEncryptionAlgorithmInput"></a>

```go
func IkeEncryptionAlgorithmInput() *string
```

- *Type:* *string

---

##### `IkeIntegrityAlgorithmInput`<sup>Optional</sup> <a name="IkeIntegrityAlgorithmInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeIntegrityAlgorithmInput"></a>

```go
func IkeIntegrityAlgorithmInput() *string
```

- *Type:* *string

---

##### `IntegrityAlgorithmInput`<sup>Optional</sup> <a name="IntegrityAlgorithmInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.integrityAlgorithmInput"></a>

```go
func IntegrityAlgorithmInput() *string
```

- *Type:* *string

---

##### `PfsGroupInput`<sup>Optional</sup> <a name="PfsGroupInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.pfsGroupInput"></a>

```go
func PfsGroupInput() *string
```

- *Type:* *string

---

##### `SaDataSizeKbInput`<sup>Optional</sup> <a name="SaDataSizeKbInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saDataSizeKbInput"></a>

```go
func SaDataSizeKbInput() *f64
```

- *Type:* *f64

---

##### `SaLifetimeSecInput`<sup>Optional</sup> <a name="SaLifetimeSecInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saLifetimeSecInput"></a>

```go
func SaLifetimeSecInput() *f64
```

- *Type:* *f64

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.dhGroup"></a>

```go
func DhGroup() *string
```

- *Type:* *string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.encryptionAlgorithm"></a>

```go
func EncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `IkeEncryptionAlgorithm`<sup>Required</sup> <a name="IkeEncryptionAlgorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeEncryptionAlgorithm"></a>

```go
func IkeEncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `IkeIntegrityAlgorithm`<sup>Required</sup> <a name="IkeIntegrityAlgorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeIntegrityAlgorithm"></a>

```go
func IkeIntegrityAlgorithm() *string
```

- *Type:* *string

---

##### `IntegrityAlgorithm`<sup>Required</sup> <a name="IntegrityAlgorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.integrityAlgorithm"></a>

```go
func IntegrityAlgorithm() *string
```

- *Type:* *string

---

##### `PfsGroup`<sup>Required</sup> <a name="PfsGroup" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.pfsGroup"></a>

```go
func PfsGroup() *string
```

- *Type:* *string

---

##### `SaDataSizeKb`<sup>Required</sup> <a name="SaDataSizeKb" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saDataSizeKb"></a>

```go
func SaDataSizeKb() *f64
```

- *Type:* *f64

---

##### `SaLifetimeSec`<sup>Required</sup> <a name="SaLifetimeSec" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saLifetimeSec"></a>

```go
func SaLifetimeSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnGatewayConnectionVpnLinkList <a name="VpnGatewayConnectionVpnLinkList" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

vpngatewayconnection.NewVpnGatewayConnectionVpnLinkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnGatewayConnectionVpnLinkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.get"></a>

```go
func Get(index *f64) VpnGatewayConnectionVpnLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnGatewayConnectionVpnLinkOutputReference <a name="VpnGatewayConnectionVpnLinkOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/vpngatewayconnection"

vpngatewayconnection.NewVpnGatewayConnectionVpnLinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnGatewayConnectionVpnLinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putCustomBgpAddress">PutCustomBgpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putIpsecPolicy">PutIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetBandwidthMbps">ResetBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetBgpEnabled">ResetBgpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetConnectionMode">ResetConnectionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetCustomBgpAddress">ResetCustomBgpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetEgressNatRuleIds">ResetEgressNatRuleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetIngressNatRuleIds">ResetIngressNatRuleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetIpsecPolicy">ResetIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetLocalAzureIpAddressEnabled">ResetLocalAzureIpAddressEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetPolicyBasedTrafficSelectorEnabled">ResetPolicyBasedTrafficSelectorEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetRatelimitEnabled">ResetRatelimitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetRouteWeight">ResetRouteWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetSharedKey">ResetSharedKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomBgpAddress` <a name="PutCustomBgpAddress" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putCustomBgpAddress"></a>

```go
func PutCustomBgpAddress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putCustomBgpAddress.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIpsecPolicy` <a name="PutIpsecPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putIpsecPolicy"></a>

```go
func PutIpsecPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putIpsecPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBandwidthMbps` <a name="ResetBandwidthMbps" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetBandwidthMbps"></a>

```go
func ResetBandwidthMbps()
```

##### `ResetBgpEnabled` <a name="ResetBgpEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetBgpEnabled"></a>

```go
func ResetBgpEnabled()
```

##### `ResetConnectionMode` <a name="ResetConnectionMode" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetConnectionMode"></a>

```go
func ResetConnectionMode()
```

##### `ResetCustomBgpAddress` <a name="ResetCustomBgpAddress" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetCustomBgpAddress"></a>

```go
func ResetCustomBgpAddress()
```

##### `ResetEgressNatRuleIds` <a name="ResetEgressNatRuleIds" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetEgressNatRuleIds"></a>

```go
func ResetEgressNatRuleIds()
```

##### `ResetIngressNatRuleIds` <a name="ResetIngressNatRuleIds" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetIngressNatRuleIds"></a>

```go
func ResetIngressNatRuleIds()
```

##### `ResetIpsecPolicy` <a name="ResetIpsecPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetIpsecPolicy"></a>

```go
func ResetIpsecPolicy()
```

##### `ResetLocalAzureIpAddressEnabled` <a name="ResetLocalAzureIpAddressEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetLocalAzureIpAddressEnabled"></a>

```go
func ResetLocalAzureIpAddressEnabled()
```

##### `ResetPolicyBasedTrafficSelectorEnabled` <a name="ResetPolicyBasedTrafficSelectorEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetPolicyBasedTrafficSelectorEnabled"></a>

```go
func ResetPolicyBasedTrafficSelectorEnabled()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetRatelimitEnabled` <a name="ResetRatelimitEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetRatelimitEnabled"></a>

```go
func ResetRatelimitEnabled()
```

##### `ResetRouteWeight` <a name="ResetRouteWeight" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetRouteWeight"></a>

```go
func ResetRouteWeight()
```

##### `ResetSharedKey` <a name="ResetSharedKey" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetSharedKey"></a>

```go
func ResetSharedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.customBgpAddress">CustomBgpAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList">VpnGatewayConnectionVpnLinkCustomBgpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ipsecPolicy">IpsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList">VpnGatewayConnectionVpnLinkIpsecPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bandwidthMbpsInput">BandwidthMbpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bgpEnabledInput">BgpEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.connectionModeInput">ConnectionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.customBgpAddressInput">CustomBgpAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.egressNatRuleIdsInput">EgressNatRuleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ingressNatRuleIdsInput">IngressNatRuleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ipsecPolicyInput">IpsecPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.localAzureIpAddressEnabledInput">LocalAzureIpAddressEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.policyBasedTrafficSelectorEnabledInput">PolicyBasedTrafficSelectorEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ratelimitEnabledInput">RatelimitEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.routeWeightInput">RouteWeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.sharedKeyInput">SharedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.vpnSiteLinkIdInput">VpnSiteLinkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bandwidthMbps">BandwidthMbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bgpEnabled">BgpEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.connectionMode">ConnectionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.egressNatRuleIds">EgressNatRuleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ingressNatRuleIds">IngressNatRuleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.localAzureIpAddressEnabled">LocalAzureIpAddressEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.policyBasedTrafficSelectorEnabled">PolicyBasedTrafficSelectorEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ratelimitEnabled">RatelimitEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.routeWeight">RouteWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.sharedKey">SharedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.vpnSiteLinkId">VpnSiteLinkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomBgpAddress`<sup>Required</sup> <a name="CustomBgpAddress" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.customBgpAddress"></a>

```go
func CustomBgpAddress() VpnGatewayConnectionVpnLinkCustomBgpAddressList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList">VpnGatewayConnectionVpnLinkCustomBgpAddressList</a>

---

##### `IpsecPolicy`<sup>Required</sup> <a name="IpsecPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ipsecPolicy"></a>

```go
func IpsecPolicy() VpnGatewayConnectionVpnLinkIpsecPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList">VpnGatewayConnectionVpnLinkIpsecPolicyList</a>

---

##### `BandwidthMbpsInput`<sup>Optional</sup> <a name="BandwidthMbpsInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bandwidthMbpsInput"></a>

```go
func BandwidthMbpsInput() *f64
```

- *Type:* *f64

---

##### `BgpEnabledInput`<sup>Optional</sup> <a name="BgpEnabledInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bgpEnabledInput"></a>

```go
func BgpEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionModeInput`<sup>Optional</sup> <a name="ConnectionModeInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.connectionModeInput"></a>

```go
func ConnectionModeInput() *string
```

- *Type:* *string

---

##### `CustomBgpAddressInput`<sup>Optional</sup> <a name="CustomBgpAddressInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.customBgpAddressInput"></a>

```go
func CustomBgpAddressInput() interface{}
```

- *Type:* interface{}

---

##### `EgressNatRuleIdsInput`<sup>Optional</sup> <a name="EgressNatRuleIdsInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.egressNatRuleIdsInput"></a>

```go
func EgressNatRuleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IngressNatRuleIdsInput`<sup>Optional</sup> <a name="IngressNatRuleIdsInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ingressNatRuleIdsInput"></a>

```go
func IngressNatRuleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpsecPolicyInput`<sup>Optional</sup> <a name="IpsecPolicyInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ipsecPolicyInput"></a>

```go
func IpsecPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `LocalAzureIpAddressEnabledInput`<sup>Optional</sup> <a name="LocalAzureIpAddressEnabledInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.localAzureIpAddressEnabledInput"></a>

```go
func LocalAzureIpAddressEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyBasedTrafficSelectorEnabledInput`<sup>Optional</sup> <a name="PolicyBasedTrafficSelectorEnabledInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.policyBasedTrafficSelectorEnabledInput"></a>

```go
func PolicyBasedTrafficSelectorEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RatelimitEnabledInput`<sup>Optional</sup> <a name="RatelimitEnabledInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ratelimitEnabledInput"></a>

```go
func RatelimitEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RouteWeightInput`<sup>Optional</sup> <a name="RouteWeightInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.routeWeightInput"></a>

```go
func RouteWeightInput() *f64
```

- *Type:* *f64

---

##### `SharedKeyInput`<sup>Optional</sup> <a name="SharedKeyInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.sharedKeyInput"></a>

```go
func SharedKeyInput() *string
```

- *Type:* *string

---

##### `VpnSiteLinkIdInput`<sup>Optional</sup> <a name="VpnSiteLinkIdInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.vpnSiteLinkIdInput"></a>

```go
func VpnSiteLinkIdInput() *string
```

- *Type:* *string

---

##### `BandwidthMbps`<sup>Required</sup> <a name="BandwidthMbps" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bandwidthMbps"></a>

```go
func BandwidthMbps() *f64
```

- *Type:* *f64

---

##### `BgpEnabled`<sup>Required</sup> <a name="BgpEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bgpEnabled"></a>

```go
func BgpEnabled() interface{}
```

- *Type:* interface{}

---

##### `ConnectionMode`<sup>Required</sup> <a name="ConnectionMode" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.connectionMode"></a>

```go
func ConnectionMode() *string
```

- *Type:* *string

---

##### `EgressNatRuleIds`<sup>Required</sup> <a name="EgressNatRuleIds" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.egressNatRuleIds"></a>

```go
func EgressNatRuleIds() *[]*string
```

- *Type:* *[]*string

---

##### `IngressNatRuleIds`<sup>Required</sup> <a name="IngressNatRuleIds" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ingressNatRuleIds"></a>

```go
func IngressNatRuleIds() *[]*string
```

- *Type:* *[]*string

---

##### `LocalAzureIpAddressEnabled`<sup>Required</sup> <a name="LocalAzureIpAddressEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.localAzureIpAddressEnabled"></a>

```go
func LocalAzureIpAddressEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyBasedTrafficSelectorEnabled`<sup>Required</sup> <a name="PolicyBasedTrafficSelectorEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.policyBasedTrafficSelectorEnabled"></a>

```go
func PolicyBasedTrafficSelectorEnabled() interface{}
```

- *Type:* interface{}

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RatelimitEnabled`<sup>Required</sup> <a name="RatelimitEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ratelimitEnabled"></a>

```go
func RatelimitEnabled() interface{}
```

- *Type:* interface{}

---

##### `RouteWeight`<sup>Required</sup> <a name="RouteWeight" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.routeWeight"></a>

```go
func RouteWeight() *f64
```

- *Type:* *f64

---

##### `SharedKey`<sup>Required</sup> <a name="SharedKey" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.sharedKey"></a>

```go
func SharedKey() *string
```

- *Type:* *string

---

##### `VpnSiteLinkId`<sup>Required</sup> <a name="VpnSiteLinkId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.vpnSiteLinkId"></a>

```go
func VpnSiteLinkId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



