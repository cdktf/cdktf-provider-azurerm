# `pointToSiteVpnGateway` Submodule <a name="`pointToSiteVpnGateway` Submodule" id="@cdktf/provider-azurerm.pointToSiteVpnGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PointToSiteVpnGateway <a name="PointToSiteVpnGateway" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway azurerm_point_to_site_vpn_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

pointtositevpngateway.NewPointToSiteVpnGateway(scope Construct, id *string, config PointToSiteVpnGatewayConfig) PointToSiteVpnGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig">PointToSiteVpnGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig">PointToSiteVpnGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putConnectionConfiguration">PutConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetDnsServers">ResetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetRoutingPreferenceInternetEnabled">ResetRoutingPreferenceInternetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionConfiguration` <a name="PutConnectionConfiguration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putConnectionConfiguration"></a>

```go
func PutConnectionConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putConnectionConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putTimeouts"></a>

```go
func PutTimeouts(value PointToSiteVpnGatewayTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a>

---

##### `ResetDnsServers` <a name="ResetDnsServers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetDnsServers"></a>

```go
func ResetDnsServers()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetId"></a>

```go
func ResetId()
```

##### `ResetRoutingPreferenceInternetEnabled` <a name="ResetRoutingPreferenceInternetEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetRoutingPreferenceInternetEnabled"></a>

```go
func ResetRoutingPreferenceInternetEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PointToSiteVpnGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

pointtositevpngateway.PointToSiteVpnGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

pointtositevpngateway.PointToSiteVpnGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

pointtositevpngateway.PointToSiteVpnGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

pointtositevpngateway.PointToSiteVpnGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PointToSiteVpnGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PointToSiteVpnGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PointToSiteVpnGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PointToSiteVpnGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connectionConfiguration">ConnectionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList">PointToSiteVpnGatewayConnectionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference">PointToSiteVpnGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connectionConfigurationInput">ConnectionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dnsServersInput">DnsServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.routingPreferenceInternetEnabledInput">RoutingPreferenceInternetEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.scaleUnitInput">ScaleUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.virtualHubIdInput">VirtualHubIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.vpnServerConfigurationIdInput">VpnServerConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.routingPreferenceInternetEnabled">RoutingPreferenceInternetEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.scaleUnit">ScaleUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.virtualHubId">VirtualHubId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.vpnServerConfigurationId">VpnServerConfigurationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionConfiguration`<sup>Required</sup> <a name="ConnectionConfiguration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connectionConfiguration"></a>

```go
func ConnectionConfiguration() PointToSiteVpnGatewayConnectionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList">PointToSiteVpnGatewayConnectionConfigurationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.timeouts"></a>

```go
func Timeouts() PointToSiteVpnGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference">PointToSiteVpnGatewayTimeoutsOutputReference</a>

---

##### `ConnectionConfigurationInput`<sup>Optional</sup> <a name="ConnectionConfigurationInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connectionConfigurationInput"></a>

```go
func ConnectionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DnsServersInput`<sup>Optional</sup> <a name="DnsServersInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dnsServersInput"></a>

```go
func DnsServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RoutingPreferenceInternetEnabledInput`<sup>Optional</sup> <a name="RoutingPreferenceInternetEnabledInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.routingPreferenceInternetEnabledInput"></a>

```go
func RoutingPreferenceInternetEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ScaleUnitInput`<sup>Optional</sup> <a name="ScaleUnitInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.scaleUnitInput"></a>

```go
func ScaleUnitInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualHubIdInput`<sup>Optional</sup> <a name="VirtualHubIdInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.virtualHubIdInput"></a>

```go
func VirtualHubIdInput() *string
```

- *Type:* *string

---

##### `VpnServerConfigurationIdInput`<sup>Optional</sup> <a name="VpnServerConfigurationIdInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.vpnServerConfigurationIdInput"></a>

```go
func VpnServerConfigurationIdInput() *string
```

- *Type:* *string

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dnsServers"></a>

```go
func DnsServers() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `RoutingPreferenceInternetEnabled`<sup>Required</sup> <a name="RoutingPreferenceInternetEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.routingPreferenceInternetEnabled"></a>

```go
func RoutingPreferenceInternetEnabled() interface{}
```

- *Type:* interface{}

---

##### `ScaleUnit`<sup>Required</sup> <a name="ScaleUnit" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.scaleUnit"></a>

```go
func ScaleUnit() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VirtualHubId`<sup>Required</sup> <a name="VirtualHubId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.virtualHubId"></a>

```go
func VirtualHubId() *string
```

- *Type:* *string

---

##### `VpnServerConfigurationId`<sup>Required</sup> <a name="VpnServerConfigurationId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.vpnServerConfigurationId"></a>

```go
func VpnServerConfigurationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PointToSiteVpnGatewayConfig <a name="PointToSiteVpnGatewayConfig" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

&pointtositevpngateway.PointToSiteVpnGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionConfiguration: interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	ScaleUnit: *f64,
	VirtualHubId: *string,
	VpnServerConfigurationId: *string,
	DnsServers: *[]*string,
	Id: *string,
	RoutingPreferenceInternetEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.connectionConfiguration">ConnectionConfiguration</a></code> | <code>interface{}</code> | connection_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#location PointToSiteVpnGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#resource_group_name PointToSiteVpnGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.scaleUnit">ScaleUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#scale_unit PointToSiteVpnGateway#scale_unit}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.virtualHubId">VirtualHubId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#virtual_hub_id PointToSiteVpnGateway#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.vpnServerConfigurationId">VpnServerConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#vpn_server_configuration_id PointToSiteVpnGateway#vpn_server_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#dns_servers PointToSiteVpnGateway#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#id PointToSiteVpnGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.routingPreferenceInternetEnabled">RoutingPreferenceInternetEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#routing_preference_internet_enabled PointToSiteVpnGateway#routing_preference_internet_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#tags PointToSiteVpnGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionConfiguration`<sup>Required</sup> <a name="ConnectionConfiguration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.connectionConfiguration"></a>

```go
ConnectionConfiguration interface{}
```

- *Type:* interface{}

connection_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#connection_configuration PointToSiteVpnGateway#connection_configuration}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#location PointToSiteVpnGateway#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#resource_group_name PointToSiteVpnGateway#resource_group_name}.

---

##### `ScaleUnit`<sup>Required</sup> <a name="ScaleUnit" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.scaleUnit"></a>

```go
ScaleUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#scale_unit PointToSiteVpnGateway#scale_unit}.

---

##### `VirtualHubId`<sup>Required</sup> <a name="VirtualHubId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.virtualHubId"></a>

```go
VirtualHubId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#virtual_hub_id PointToSiteVpnGateway#virtual_hub_id}.

---

##### `VpnServerConfigurationId`<sup>Required</sup> <a name="VpnServerConfigurationId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.vpnServerConfigurationId"></a>

```go
VpnServerConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#vpn_server_configuration_id PointToSiteVpnGateway#vpn_server_configuration_id}.

---

##### `DnsServers`<sup>Optional</sup> <a name="DnsServers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.dnsServers"></a>

```go
DnsServers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#dns_servers PointToSiteVpnGateway#dns_servers}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#id PointToSiteVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RoutingPreferenceInternetEnabled`<sup>Optional</sup> <a name="RoutingPreferenceInternetEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.routingPreferenceInternetEnabled"></a>

```go
RoutingPreferenceInternetEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#routing_preference_internet_enabled PointToSiteVpnGateway#routing_preference_internet_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#tags PointToSiteVpnGateway#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.timeouts"></a>

```go
Timeouts PointToSiteVpnGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#timeouts PointToSiteVpnGateway#timeouts}

---

### PointToSiteVpnGatewayConnectionConfiguration <a name="PointToSiteVpnGatewayConnectionConfiguration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

&pointtositevpngateway.PointToSiteVpnGatewayConnectionConfiguration {
	Name: *string,
	VpnClientAddressPool: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool,
	InternetSecurityEnabled: interface{},
	Route: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.vpnClientAddressPool">VpnClientAddressPool</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a></code> | vpn_client_address_pool block. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.internetSecurityEnabled">InternetSecurityEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#internet_security_enabled PointToSiteVpnGateway#internet_security_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.route">Route</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a></code> | route block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}.

---

##### `VpnClientAddressPool`<sup>Required</sup> <a name="VpnClientAddressPool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.vpnClientAddressPool"></a>

```go
VpnClientAddressPool PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a>

vpn_client_address_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#vpn_client_address_pool PointToSiteVpnGateway#vpn_client_address_pool}

---

##### `InternetSecurityEnabled`<sup>Optional</sup> <a name="InternetSecurityEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.internetSecurityEnabled"></a>

```go
InternetSecurityEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#internet_security_enabled PointToSiteVpnGateway#internet_security_enabled}.

---

##### `Route`<sup>Optional</sup> <a name="Route" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.route"></a>

```go
Route PointToSiteVpnGatewayConnectionConfigurationRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a>

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#route PointToSiteVpnGateway#route}

---

### PointToSiteVpnGatewayConnectionConfigurationRoute <a name="PointToSiteVpnGatewayConnectionConfigurationRoute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

&pointtositevpngateway.PointToSiteVpnGatewayConnectionConfigurationRoute {
	AssociatedRouteTableId: *string,
	InboundRouteMapId: *string,
	OutboundRouteMapId: *string,
	PropagatedRouteTable: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.associatedRouteTableId">AssociatedRouteTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#associated_route_table_id PointToSiteVpnGateway#associated_route_table_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.inboundRouteMapId">InboundRouteMapId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#inbound_route_map_id PointToSiteVpnGateway#inbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.outboundRouteMapId">OutboundRouteMapId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#outbound_route_map_id PointToSiteVpnGateway#outbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.propagatedRouteTable">PropagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a></code> | propagated_route_table block. |

---

##### `AssociatedRouteTableId`<sup>Required</sup> <a name="AssociatedRouteTableId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.associatedRouteTableId"></a>

```go
AssociatedRouteTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#associated_route_table_id PointToSiteVpnGateway#associated_route_table_id}.

---

##### `InboundRouteMapId`<sup>Optional</sup> <a name="InboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.inboundRouteMapId"></a>

```go
InboundRouteMapId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#inbound_route_map_id PointToSiteVpnGateway#inbound_route_map_id}.

---

##### `OutboundRouteMapId`<sup>Optional</sup> <a name="OutboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.outboundRouteMapId"></a>

```go
OutboundRouteMapId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#outbound_route_map_id PointToSiteVpnGateway#outbound_route_map_id}.

---

##### `PropagatedRouteTable`<sup>Optional</sup> <a name="PropagatedRouteTable" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.propagatedRouteTable"></a>

```go
PropagatedRouteTable PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a>

propagated_route_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#propagated_route_table PointToSiteVpnGateway#propagated_route_table}

---

### PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable <a name="PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

&pointtositevpngateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable {
	Ids: *[]*string,
	Labels: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.property.ids">Ids</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#ids PointToSiteVpnGateway#ids}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.property.labels">Labels</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#labels PointToSiteVpnGateway#labels}. |

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.property.ids"></a>

```go
Ids *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#ids PointToSiteVpnGateway#ids}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.property.labels"></a>

```go
Labels *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#labels PointToSiteVpnGateway#labels}.

---

### PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool <a name="PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

&pointtositevpngateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool {
	AddressPrefixes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool.property.addressPrefixes">AddressPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#address_prefixes PointToSiteVpnGateway#address_prefixes}. |

---

##### `AddressPrefixes`<sup>Required</sup> <a name="AddressPrefixes" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool.property.addressPrefixes"></a>

```go
AddressPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#address_prefixes PointToSiteVpnGateway#address_prefixes}.

---

### PointToSiteVpnGatewayTimeouts <a name="PointToSiteVpnGatewayTimeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

&pointtositevpngateway.PointToSiteVpnGatewayTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#create PointToSiteVpnGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#delete PointToSiteVpnGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#read PointToSiteVpnGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#update PointToSiteVpnGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#create PointToSiteVpnGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#delete PointToSiteVpnGateway#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#read PointToSiteVpnGateway#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/point_to_site_vpn_gateway#update PointToSiteVpnGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PointToSiteVpnGatewayConnectionConfigurationList <a name="PointToSiteVpnGatewayConnectionConfigurationList" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

pointtositevpngateway.NewPointToSiteVpnGatewayConnectionConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PointToSiteVpnGatewayConnectionConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.get"></a>

```go
func Get(index *f64) PointToSiteVpnGatewayConnectionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PointToSiteVpnGatewayConnectionConfigurationOutputReference <a name="PointToSiteVpnGatewayConnectionConfigurationOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

pointtositevpngateway.NewPointToSiteVpnGatewayConnectionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PointToSiteVpnGatewayConnectionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putRoute">PutRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putVpnClientAddressPool">PutVpnClientAddressPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resetInternetSecurityEnabled">ResetInternetSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resetRoute">ResetRoute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRoute` <a name="PutRoute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putRoute"></a>

```go
func PutRoute(value PointToSiteVpnGatewayConnectionConfigurationRoute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a>

---

##### `PutVpnClientAddressPool` <a name="PutVpnClientAddressPool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putVpnClientAddressPool"></a>

```go
func PutVpnClientAddressPool(value PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putVpnClientAddressPool.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a>

---

##### `ResetInternetSecurityEnabled` <a name="ResetInternetSecurityEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resetInternetSecurityEnabled"></a>

```go
func ResetInternetSecurityEnabled()
```

##### `ResetRoute` <a name="ResetRoute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resetRoute"></a>

```go
func ResetRoute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.route">Route</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference">PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.vpnClientAddressPool">VpnClientAddressPool</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internetSecurityEnabledInput">InternetSecurityEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.routeInput">RouteInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.vpnClientAddressPoolInput">VpnClientAddressPoolInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internetSecurityEnabled">InternetSecurityEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.route"></a>

```go
func Route() PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference">PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference</a>

---

##### `VpnClientAddressPool`<sup>Required</sup> <a name="VpnClientAddressPool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.vpnClientAddressPool"></a>

```go
func VpnClientAddressPool() PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference</a>

---

##### `InternetSecurityEnabledInput`<sup>Optional</sup> <a name="InternetSecurityEnabledInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internetSecurityEnabledInput"></a>

```go
func InternetSecurityEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RouteInput`<sup>Optional</sup> <a name="RouteInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.routeInput"></a>

```go
func RouteInput() PointToSiteVpnGatewayConnectionConfigurationRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a>

---

##### `VpnClientAddressPoolInput`<sup>Optional</sup> <a name="VpnClientAddressPoolInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.vpnClientAddressPoolInput"></a>

```go
func VpnClientAddressPoolInput() PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a>

---

##### `InternetSecurityEnabled`<sup>Required</sup> <a name="InternetSecurityEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internetSecurityEnabled"></a>

```go
func InternetSecurityEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference <a name="PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

pointtositevpngateway.NewPointToSiteVpnGatewayConnectionConfigurationRouteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.putPropagatedRouteTable">PutPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetInboundRouteMapId">ResetInboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetOutboundRouteMapId">ResetOutboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetPropagatedRouteTable">ResetPropagatedRouteTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPropagatedRouteTable` <a name="PutPropagatedRouteTable" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.putPropagatedRouteTable"></a>

```go
func PutPropagatedRouteTable(value PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.putPropagatedRouteTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a>

---

##### `ResetInboundRouteMapId` <a name="ResetInboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetInboundRouteMapId"></a>

```go
func ResetInboundRouteMapId()
```

##### `ResetOutboundRouteMapId` <a name="ResetOutboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetOutboundRouteMapId"></a>

```go
func ResetOutboundRouteMapId()
```

##### `ResetPropagatedRouteTable` <a name="ResetPropagatedRouteTable" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetPropagatedRouteTable"></a>

```go
func ResetPropagatedRouteTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.propagatedRouteTable">PropagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.associatedRouteTableIdInput">AssociatedRouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.inboundRouteMapIdInput">InboundRouteMapIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.outboundRouteMapIdInput">OutboundRouteMapIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.propagatedRouteTableInput">PropagatedRouteTableInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.associatedRouteTableId">AssociatedRouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.inboundRouteMapId">InboundRouteMapId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.outboundRouteMapId">OutboundRouteMapId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropagatedRouteTable`<sup>Required</sup> <a name="PropagatedRouteTable" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.propagatedRouteTable"></a>

```go
func PropagatedRouteTable() PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference</a>

---

##### `AssociatedRouteTableIdInput`<sup>Optional</sup> <a name="AssociatedRouteTableIdInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.associatedRouteTableIdInput"></a>

```go
func AssociatedRouteTableIdInput() *string
```

- *Type:* *string

---

##### `InboundRouteMapIdInput`<sup>Optional</sup> <a name="InboundRouteMapIdInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.inboundRouteMapIdInput"></a>

```go
func InboundRouteMapIdInput() *string
```

- *Type:* *string

---

##### `OutboundRouteMapIdInput`<sup>Optional</sup> <a name="OutboundRouteMapIdInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.outboundRouteMapIdInput"></a>

```go
func OutboundRouteMapIdInput() *string
```

- *Type:* *string

---

##### `PropagatedRouteTableInput`<sup>Optional</sup> <a name="PropagatedRouteTableInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.propagatedRouteTableInput"></a>

```go
func PropagatedRouteTableInput() PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a>

---

##### `AssociatedRouteTableId`<sup>Required</sup> <a name="AssociatedRouteTableId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.associatedRouteTableId"></a>

```go
func AssociatedRouteTableId() *string
```

- *Type:* *string

---

##### `InboundRouteMapId`<sup>Required</sup> <a name="InboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.inboundRouteMapId"></a>

```go
func InboundRouteMapId() *string
```

- *Type:* *string

---

##### `OutboundRouteMapId`<sup>Required</sup> <a name="OutboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.outboundRouteMapId"></a>

```go
func OutboundRouteMapId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.internalValue"></a>

```go
func InternalValue() PointToSiteVpnGatewayConnectionConfigurationRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a>

---


### PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference <a name="PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

pointtositevpngateway.NewPointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resetLabels"></a>

```go
func ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.idsInput">IdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.idsInput"></a>

```go
func IdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.internalValue"></a>

```go
func InternalValue() PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a>

---


### PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference <a name="PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

pointtositevpngateway.NewPointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.addressPrefixesInput">AddressPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.addressPrefixes">AddressPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressPrefixesInput`<sup>Optional</sup> <a name="AddressPrefixesInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.addressPrefixesInput"></a>

```go
func AddressPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AddressPrefixes`<sup>Required</sup> <a name="AddressPrefixes" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.addressPrefixes"></a>

```go
func AddressPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.internalValue"></a>

```go
func InternalValue() PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a>

---


### PointToSiteVpnGatewayTimeoutsOutputReference <a name="PointToSiteVpnGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pointtositevpngateway"

pointtositevpngateway.NewPointToSiteVpnGatewayTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PointToSiteVpnGatewayTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



