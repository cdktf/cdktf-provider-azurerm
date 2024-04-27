# `frontdoor` Submodule <a name="`frontdoor` Submodule" id="@cdktf/provider-azurerm.frontdoor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Frontdoor <a name="Frontdoor" id="@cdktf/provider-azurerm.frontdoor.Frontdoor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor azurerm_frontdoor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoor(scope Construct, id *string, config FrontdoorConfig) Frontdoor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig">FrontdoorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig">FrontdoorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPool">PutBackendPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolHealthProbe">PutBackendPoolHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolLoadBalancing">PutBackendPoolLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolSettings">PutBackendPoolSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putFrontendEndpoint">PutFrontendEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putRoutingRule">PutRoutingRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetBackendPoolSettings">ResetBackendPoolSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetLoadBalancerEnabled">ResetLoadBalancerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackendPool` <a name="PutBackendPool" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPool"></a>

```go
func PutBackendPool(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPool.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBackendPoolHealthProbe` <a name="PutBackendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolHealthProbe"></a>

```go
func PutBackendPoolHealthProbe(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolHealthProbe.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBackendPoolLoadBalancing` <a name="PutBackendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolLoadBalancing"></a>

```go
func PutBackendPoolLoadBalancing(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolLoadBalancing.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBackendPoolSettings` <a name="PutBackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolSettings"></a>

```go
func PutBackendPoolSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFrontendEndpoint` <a name="PutFrontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putFrontendEndpoint"></a>

```go
func PutFrontendEndpoint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putFrontendEndpoint.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRoutingRule` <a name="PutRoutingRule" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putRoutingRule"></a>

```go
func PutRoutingRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putRoutingRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts"></a>

```go
func PutTimeouts(value FrontdoorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>

---

##### `ResetBackendPoolSettings` <a name="ResetBackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetBackendPoolSettings"></a>

```go
func ResetBackendPoolSettings()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetFriendlyName"></a>

```go
func ResetFriendlyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetId"></a>

```go
func ResetId()
```

##### `ResetLoadBalancerEnabled` <a name="ResetLoadBalancerEnabled" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetLoadBalancerEnabled"></a>

```go
func ResetLoadBalancerEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Frontdoor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.Frontdoor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.Frontdoor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.Frontdoor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.Frontdoor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Frontdoor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Frontdoor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Frontdoor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Frontdoor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPool">BackendPool</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList">FrontdoorBackendPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbe">BackendPoolHealthProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList">FrontdoorBackendPoolHealthProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbes">BackendPoolHealthProbes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancing">BackendPoolLoadBalancing</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList">FrontdoorBackendPoolLoadBalancingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingSettings">BackendPoolLoadBalancingSettings</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPools">BackendPools</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettings">BackendPoolSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList">FrontdoorBackendPoolSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cname">Cname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.explicitResourceOrder">ExplicitResourceOrder</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList">FrontdoorExplicitResourceOrderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoint">FrontendEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList">FrontdoorFrontendEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoints">FrontendEndpoints</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.headerFrontdoorId">HeaderFrontdoorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRule">RoutingRule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList">FrontdoorRoutingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRules">RoutingRules</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference">FrontdoorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbeInput">BackendPoolHealthProbeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolInput">BackendPoolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingInput">BackendPoolLoadBalancingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettingsInput">BackendPoolSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpointInput">FrontendEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabledInput">LoadBalancerEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRuleInput">RoutingRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabled">LoadBalancerEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendPool`<sup>Required</sup> <a name="BackendPool" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPool"></a>

```go
func BackendPool() FrontdoorBackendPoolList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList">FrontdoorBackendPoolList</a>

---

##### `BackendPoolHealthProbe`<sup>Required</sup> <a name="BackendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbe"></a>

```go
func BackendPoolHealthProbe() FrontdoorBackendPoolHealthProbeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList">FrontdoorBackendPoolHealthProbeList</a>

---

##### `BackendPoolHealthProbes`<sup>Required</sup> <a name="BackendPoolHealthProbes" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbes"></a>

```go
func BackendPoolHealthProbes() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `BackendPoolLoadBalancing`<sup>Required</sup> <a name="BackendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancing"></a>

```go
func BackendPoolLoadBalancing() FrontdoorBackendPoolLoadBalancingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList">FrontdoorBackendPoolLoadBalancingList</a>

---

##### `BackendPoolLoadBalancingSettings`<sup>Required</sup> <a name="BackendPoolLoadBalancingSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingSettings"></a>

```go
func BackendPoolLoadBalancingSettings() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `BackendPools`<sup>Required</sup> <a name="BackendPools" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPools"></a>

```go
func BackendPools() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `BackendPoolSettings`<sup>Required</sup> <a name="BackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettings"></a>

```go
func BackendPoolSettings() FrontdoorBackendPoolSettingsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList">FrontdoorBackendPoolSettingsList</a>

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cname"></a>

```go
func Cname() *string
```

- *Type:* *string

---

##### `ExplicitResourceOrder`<sup>Required</sup> <a name="ExplicitResourceOrder" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.explicitResourceOrder"></a>

```go
func ExplicitResourceOrder() FrontdoorExplicitResourceOrderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList">FrontdoorExplicitResourceOrderList</a>

---

##### `FrontendEndpoint`<sup>Required</sup> <a name="FrontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoint"></a>

```go
func FrontendEndpoint() FrontdoorFrontendEndpointList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList">FrontdoorFrontendEndpointList</a>

---

##### `FrontendEndpoints`<sup>Required</sup> <a name="FrontendEndpoints" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoints"></a>

```go
func FrontendEndpoints() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HeaderFrontdoorId`<sup>Required</sup> <a name="HeaderFrontdoorId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.headerFrontdoorId"></a>

```go
func HeaderFrontdoorId() *string
```

- *Type:* *string

---

##### `RoutingRule`<sup>Required</sup> <a name="RoutingRule" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRule"></a>

```go
func RoutingRule() FrontdoorRoutingRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList">FrontdoorRoutingRuleList</a>

---

##### `RoutingRules`<sup>Required</sup> <a name="RoutingRules" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRules"></a>

```go
func RoutingRules() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeouts"></a>

```go
func Timeouts() FrontdoorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference">FrontdoorTimeoutsOutputReference</a>

---

##### `BackendPoolHealthProbeInput`<sup>Optional</sup> <a name="BackendPoolHealthProbeInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbeInput"></a>

```go
func BackendPoolHealthProbeInput() interface{}
```

- *Type:* interface{}

---

##### `BackendPoolInput`<sup>Optional</sup> <a name="BackendPoolInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolInput"></a>

```go
func BackendPoolInput() interface{}
```

- *Type:* interface{}

---

##### `BackendPoolLoadBalancingInput`<sup>Optional</sup> <a name="BackendPoolLoadBalancingInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingInput"></a>

```go
func BackendPoolLoadBalancingInput() interface{}
```

- *Type:* interface{}

---

##### `BackendPoolSettingsInput`<sup>Optional</sup> <a name="BackendPoolSettingsInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettingsInput"></a>

```go
func BackendPoolSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyNameInput"></a>

```go
func FriendlyNameInput() *string
```

- *Type:* *string

---

##### `FrontendEndpointInput`<sup>Optional</sup> <a name="FrontendEndpointInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpointInput"></a>

```go
func FrontendEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerEnabledInput`<sup>Optional</sup> <a name="LoadBalancerEnabledInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabledInput"></a>

```go
func LoadBalancerEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RoutingRuleInput`<sup>Optional</sup> <a name="RoutingRuleInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRuleInput"></a>

```go
func RoutingRuleInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyName"></a>

```go
func FriendlyName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadBalancerEnabled`<sup>Required</sup> <a name="LoadBalancerEnabled" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabled"></a>

```go
func LoadBalancerEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FrontdoorBackendPool <a name="FrontdoorBackendPool" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

&frontdoor.FrontdoorBackendPool {
	Backend: interface{},
	HealthProbeName: *string,
	LoadBalancingName: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.backend">Backend</a></code> | <code>interface{}</code> | backend block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.healthProbeName">HealthProbeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#health_probe_name Frontdoor#health_probe_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.loadBalancingName">LoadBalancingName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#load_balancing_name Frontdoor#load_balancing_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#name Frontdoor#name}. |

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.backend"></a>

```go
Backend interface{}
```

- *Type:* interface{}

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#backend Frontdoor#backend}

---

##### `HealthProbeName`<sup>Required</sup> <a name="HealthProbeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.healthProbeName"></a>

```go
HealthProbeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#health_probe_name Frontdoor#health_probe_name}.

---

##### `LoadBalancingName`<sup>Required</sup> <a name="LoadBalancingName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.loadBalancingName"></a>

```go
LoadBalancingName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#load_balancing_name Frontdoor#load_balancing_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#name Frontdoor#name}.

---

### FrontdoorBackendPoolBackend <a name="FrontdoorBackendPoolBackend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

&frontdoor.FrontdoorBackendPoolBackend {
	Address: *string,
	HostHeader: *string,
	HttpPort: *f64,
	HttpsPort: *f64,
	Enabled: interface{},
	Priority: *f64,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#address Frontdoor#address}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.hostHeader">HostHeader</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#host_header Frontdoor#host_header}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpPort">HttpPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#http_port Frontdoor#http_port}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpsPort">HttpsPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#https_port Frontdoor#https_port}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#enabled Frontdoor#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#priority Frontdoor#priority}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#weight Frontdoor#weight}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#address Frontdoor#address}.

---

##### `HostHeader`<sup>Required</sup> <a name="HostHeader" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.hostHeader"></a>

```go
HostHeader *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#host_header Frontdoor#host_header}.

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpPort"></a>

```go
HttpPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#http_port Frontdoor#http_port}.

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpsPort"></a>

```go
HttpsPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#https_port Frontdoor#https_port}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#enabled Frontdoor#enabled}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#priority Frontdoor#priority}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#weight Frontdoor#weight}.

---

### FrontdoorBackendPoolHealthProbe <a name="FrontdoorBackendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

&frontdoor.FrontdoorBackendPoolHealthProbe {
	Name: *string,
	Enabled: interface{},
	IntervalInSeconds: *f64,
	Path: *string,
	ProbeMethod: *string,
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#enabled Frontdoor#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#interval_in_seconds Frontdoor#interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#path Frontdoor#path}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.probeMethod">ProbeMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#probe_method Frontdoor#probe_method}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#protocol Frontdoor#protocol}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#enabled Frontdoor#enabled}.

---

##### `IntervalInSeconds`<sup>Optional</sup> <a name="IntervalInSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.intervalInSeconds"></a>

```go
IntervalInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#interval_in_seconds Frontdoor#interval_in_seconds}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#path Frontdoor#path}.

---

##### `ProbeMethod`<sup>Optional</sup> <a name="ProbeMethod" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.probeMethod"></a>

```go
ProbeMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#probe_method Frontdoor#probe_method}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#protocol Frontdoor#protocol}.

---

### FrontdoorBackendPoolLoadBalancing <a name="FrontdoorBackendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

&frontdoor.FrontdoorBackendPoolLoadBalancing {
	Name: *string,
	AdditionalLatencyMilliseconds: *f64,
	SampleSize: *f64,
	SuccessfulSamplesRequired: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.additionalLatencyMilliseconds">AdditionalLatencyMilliseconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#additional_latency_milliseconds Frontdoor#additional_latency_milliseconds}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.sampleSize">SampleSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#sample_size Frontdoor#sample_size}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.successfulSamplesRequired">SuccessfulSamplesRequired</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#successful_samples_required Frontdoor#successful_samples_required}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `AdditionalLatencyMilliseconds`<sup>Optional</sup> <a name="AdditionalLatencyMilliseconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.additionalLatencyMilliseconds"></a>

```go
AdditionalLatencyMilliseconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#additional_latency_milliseconds Frontdoor#additional_latency_milliseconds}.

---

##### `SampleSize`<sup>Optional</sup> <a name="SampleSize" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.sampleSize"></a>

```go
SampleSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#sample_size Frontdoor#sample_size}.

---

##### `SuccessfulSamplesRequired`<sup>Optional</sup> <a name="SuccessfulSamplesRequired" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.successfulSamplesRequired"></a>

```go
SuccessfulSamplesRequired *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#successful_samples_required Frontdoor#successful_samples_required}.

---

### FrontdoorBackendPoolSettings <a name="FrontdoorBackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

&frontdoor.FrontdoorBackendPoolSettings {
	EnforceBackendPoolsCertificateNameCheck: interface{},
	BackendPoolsSendReceiveTimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.enforceBackendPoolsCertificateNameCheck">EnforceBackendPoolsCertificateNameCheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#enforce_backend_pools_certificate_name_check Frontdoor#enforce_backend_pools_certificate_name_check}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.backendPoolsSendReceiveTimeoutSeconds">BackendPoolsSendReceiveTimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#backend_pools_send_receive_timeout_seconds Frontdoor#backend_pools_send_receive_timeout_seconds}. |

---

##### `EnforceBackendPoolsCertificateNameCheck`<sup>Required</sup> <a name="EnforceBackendPoolsCertificateNameCheck" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.enforceBackendPoolsCertificateNameCheck"></a>

```go
EnforceBackendPoolsCertificateNameCheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#enforce_backend_pools_certificate_name_check Frontdoor#enforce_backend_pools_certificate_name_check}.

---

##### `BackendPoolsSendReceiveTimeoutSeconds`<sup>Optional</sup> <a name="BackendPoolsSendReceiveTimeoutSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.backendPoolsSendReceiveTimeoutSeconds"></a>

```go
BackendPoolsSendReceiveTimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#backend_pools_send_receive_timeout_seconds Frontdoor#backend_pools_send_receive_timeout_seconds}.

---

### FrontdoorConfig <a name="FrontdoorConfig" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

&frontdoor.FrontdoorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackendPool: interface{},
	BackendPoolHealthProbe: interface{},
	BackendPoolLoadBalancing: interface{},
	FrontendEndpoint: interface{},
	Name: *string,
	ResourceGroupName: *string,
	RoutingRule: interface{},
	BackendPoolSettings: interface{},
	FriendlyName: *string,
	Id: *string,
	LoadBalancerEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.frontdoor.FrontdoorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPool">BackendPool</a></code> | <code>interface{}</code> | backend_pool block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolHealthProbe">BackendPoolHealthProbe</a></code> | <code>interface{}</code> | backend_pool_health_probe block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolLoadBalancing">BackendPoolLoadBalancing</a></code> | <code>interface{}</code> | backend_pool_load_balancing block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.frontendEndpoint">FrontendEndpoint</a></code> | <code>interface{}</code> | frontend_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#resource_group_name Frontdoor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.routingRule">RoutingRule</a></code> | <code>interface{}</code> | routing_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolSettings">BackendPoolSettings</a></code> | <code>interface{}</code> | backend_pool_settings block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#friendly_name Frontdoor#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#id Frontdoor#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.loadBalancerEnabled">LoadBalancerEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#load_balancer_enabled Frontdoor#load_balancer_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#tags Frontdoor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendPool`<sup>Required</sup> <a name="BackendPool" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPool"></a>

```go
BackendPool interface{}
```

- *Type:* interface{}

backend_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#backend_pool Frontdoor#backend_pool}

---

##### `BackendPoolHealthProbe`<sup>Required</sup> <a name="BackendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolHealthProbe"></a>

```go
BackendPoolHealthProbe interface{}
```

- *Type:* interface{}

backend_pool_health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#backend_pool_health_probe Frontdoor#backend_pool_health_probe}

---

##### `BackendPoolLoadBalancing`<sup>Required</sup> <a name="BackendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolLoadBalancing"></a>

```go
BackendPoolLoadBalancing interface{}
```

- *Type:* interface{}

backend_pool_load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#backend_pool_load_balancing Frontdoor#backend_pool_load_balancing}

---

##### `FrontendEndpoint`<sup>Required</sup> <a name="FrontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.frontendEndpoint"></a>

```go
FrontendEndpoint interface{}
```

- *Type:* interface{}

frontend_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#frontend_endpoint Frontdoor#frontend_endpoint}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#resource_group_name Frontdoor#resource_group_name}.

---

##### `RoutingRule`<sup>Required</sup> <a name="RoutingRule" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.routingRule"></a>

```go
RoutingRule interface{}
```

- *Type:* interface{}

routing_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#routing_rule Frontdoor#routing_rule}

---

##### `BackendPoolSettings`<sup>Optional</sup> <a name="BackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolSettings"></a>

```go
BackendPoolSettings interface{}
```

- *Type:* interface{}

backend_pool_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#backend_pool_settings Frontdoor#backend_pool_settings}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.friendlyName"></a>

```go
FriendlyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#friendly_name Frontdoor#friendly_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#id Frontdoor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancerEnabled`<sup>Optional</sup> <a name="LoadBalancerEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.loadBalancerEnabled"></a>

```go
LoadBalancerEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#load_balancer_enabled Frontdoor#load_balancer_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#tags Frontdoor#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.timeouts"></a>

```go
Timeouts FrontdoorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#timeouts Frontdoor#timeouts}

---

### FrontdoorExplicitResourceOrder <a name="FrontdoorExplicitResourceOrder" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

&frontdoor.FrontdoorExplicitResourceOrder {

}
```


### FrontdoorFrontendEndpoint <a name="FrontdoorFrontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

&frontdoor.FrontdoorFrontendEndpoint {
	HostName: *string,
	Name: *string,
	SessionAffinityEnabled: interface{},
	SessionAffinityTtlSeconds: *f64,
	WebApplicationFirewallPolicyLinkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#host_name Frontdoor#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityEnabled">SessionAffinityEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#session_affinity_enabled Frontdoor#session_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityTtlSeconds">SessionAffinityTtlSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#session_affinity_ttl_seconds Frontdoor#session_affinity_ttl_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.webApplicationFirewallPolicyLinkId">WebApplicationFirewallPolicyLinkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#web_application_firewall_policy_link_id Frontdoor#web_application_firewall_policy_link_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#host_name Frontdoor#host_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `SessionAffinityEnabled`<sup>Optional</sup> <a name="SessionAffinityEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityEnabled"></a>

```go
SessionAffinityEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#session_affinity_enabled Frontdoor#session_affinity_enabled}.

---

##### `SessionAffinityTtlSeconds`<sup>Optional</sup> <a name="SessionAffinityTtlSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityTtlSeconds"></a>

```go
SessionAffinityTtlSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#session_affinity_ttl_seconds Frontdoor#session_affinity_ttl_seconds}.

---

##### `WebApplicationFirewallPolicyLinkId`<sup>Optional</sup> <a name="WebApplicationFirewallPolicyLinkId" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.webApplicationFirewallPolicyLinkId"></a>

```go
WebApplicationFirewallPolicyLinkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#web_application_firewall_policy_link_id Frontdoor#web_application_firewall_policy_link_id}.

---

### FrontdoorRoutingRule <a name="FrontdoorRoutingRule" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

&frontdoor.FrontdoorRoutingRule {
	AcceptedProtocols: *[]*string,
	FrontendEndpoints: *[]*string,
	Name: *string,
	PatternsToMatch: *[]*string,
	Enabled: interface{},
	ForwardingConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration,
	RedirectConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.acceptedProtocols">AcceptedProtocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#accepted_protocols Frontdoor#accepted_protocols}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.frontendEndpoints">FrontendEndpoints</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#frontend_endpoints Frontdoor#frontend_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.patternsToMatch">PatternsToMatch</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#patterns_to_match Frontdoor#patterns_to_match}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#enabled Frontdoor#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.forwardingConfiguration">ForwardingConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a></code> | forwarding_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.redirectConfiguration">RedirectConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a></code> | redirect_configuration block. |

---

##### `AcceptedProtocols`<sup>Required</sup> <a name="AcceptedProtocols" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.acceptedProtocols"></a>

```go
AcceptedProtocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#accepted_protocols Frontdoor#accepted_protocols}.

---

##### `FrontendEndpoints`<sup>Required</sup> <a name="FrontendEndpoints" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.frontendEndpoints"></a>

```go
FrontendEndpoints *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#frontend_endpoints Frontdoor#frontend_endpoints}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `PatternsToMatch`<sup>Required</sup> <a name="PatternsToMatch" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.patternsToMatch"></a>

```go
PatternsToMatch *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#patterns_to_match Frontdoor#patterns_to_match}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#enabled Frontdoor#enabled}.

---

##### `ForwardingConfiguration`<sup>Optional</sup> <a name="ForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.forwardingConfiguration"></a>

```go
ForwardingConfiguration FrontdoorRoutingRuleForwardingConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

forwarding_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#forwarding_configuration Frontdoor#forwarding_configuration}

---

##### `RedirectConfiguration`<sup>Optional</sup> <a name="RedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.redirectConfiguration"></a>

```go
RedirectConfiguration FrontdoorRoutingRuleRedirectConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

redirect_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#redirect_configuration Frontdoor#redirect_configuration}

---

### FrontdoorRoutingRuleForwardingConfiguration <a name="FrontdoorRoutingRuleForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

&frontdoor.FrontdoorRoutingRuleForwardingConfiguration {
	BackendPoolName: *string,
	CacheDuration: *string,
	CacheEnabled: interface{},
	CacheQueryParameters: *[]*string,
	CacheQueryParameterStripDirective: *string,
	CacheUseDynamicCompression: interface{},
	CustomForwardingPath: *string,
	ForwardingProtocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.backendPoolName">BackendPoolName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#backend_pool_name Frontdoor#backend_pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheDuration">CacheDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#cache_duration Frontdoor#cache_duration}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheEnabled">CacheEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#cache_enabled Frontdoor#cache_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameters">CacheQueryParameters</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#cache_query_parameters Frontdoor#cache_query_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameterStripDirective">CacheQueryParameterStripDirective</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#cache_query_parameter_strip_directive Frontdoor#cache_query_parameter_strip_directive}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheUseDynamicCompression">CacheUseDynamicCompression</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#cache_use_dynamic_compression Frontdoor#cache_use_dynamic_compression}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.customForwardingPath">CustomForwardingPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#custom_forwarding_path Frontdoor#custom_forwarding_path}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.forwardingProtocol">ForwardingProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#forwarding_protocol Frontdoor#forwarding_protocol}. |

---

##### `BackendPoolName`<sup>Required</sup> <a name="BackendPoolName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.backendPoolName"></a>

```go
BackendPoolName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#backend_pool_name Frontdoor#backend_pool_name}.

---

##### `CacheDuration`<sup>Optional</sup> <a name="CacheDuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheDuration"></a>

```go
CacheDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#cache_duration Frontdoor#cache_duration}.

---

##### `CacheEnabled`<sup>Optional</sup> <a name="CacheEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheEnabled"></a>

```go
CacheEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#cache_enabled Frontdoor#cache_enabled}.

---

##### `CacheQueryParameters`<sup>Optional</sup> <a name="CacheQueryParameters" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameters"></a>

```go
CacheQueryParameters *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#cache_query_parameters Frontdoor#cache_query_parameters}.

---

##### `CacheQueryParameterStripDirective`<sup>Optional</sup> <a name="CacheQueryParameterStripDirective" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameterStripDirective"></a>

```go
CacheQueryParameterStripDirective *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#cache_query_parameter_strip_directive Frontdoor#cache_query_parameter_strip_directive}.

---

##### `CacheUseDynamicCompression`<sup>Optional</sup> <a name="CacheUseDynamicCompression" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheUseDynamicCompression"></a>

```go
CacheUseDynamicCompression interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#cache_use_dynamic_compression Frontdoor#cache_use_dynamic_compression}.

---

##### `CustomForwardingPath`<sup>Optional</sup> <a name="CustomForwardingPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.customForwardingPath"></a>

```go
CustomForwardingPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#custom_forwarding_path Frontdoor#custom_forwarding_path}.

---

##### `ForwardingProtocol`<sup>Optional</sup> <a name="ForwardingProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.forwardingProtocol"></a>

```go
ForwardingProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#forwarding_protocol Frontdoor#forwarding_protocol}.

---

### FrontdoorRoutingRuleRedirectConfiguration <a name="FrontdoorRoutingRuleRedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

&frontdoor.FrontdoorRoutingRuleRedirectConfiguration {
	RedirectProtocol: *string,
	RedirectType: *string,
	CustomFragment: *string,
	CustomHost: *string,
	CustomPath: *string,
	CustomQueryString: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectProtocol">RedirectProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#redirect_protocol Frontdoor#redirect_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectType">RedirectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#redirect_type Frontdoor#redirect_type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customFragment">CustomFragment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#custom_fragment Frontdoor#custom_fragment}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customHost">CustomHost</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#custom_host Frontdoor#custom_host}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customPath">CustomPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#custom_path Frontdoor#custom_path}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customQueryString">CustomQueryString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#custom_query_string Frontdoor#custom_query_string}. |

---

##### `RedirectProtocol`<sup>Required</sup> <a name="RedirectProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectProtocol"></a>

```go
RedirectProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#redirect_protocol Frontdoor#redirect_protocol}.

---

##### `RedirectType`<sup>Required</sup> <a name="RedirectType" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectType"></a>

```go
RedirectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#redirect_type Frontdoor#redirect_type}.

---

##### `CustomFragment`<sup>Optional</sup> <a name="CustomFragment" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customFragment"></a>

```go
CustomFragment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#custom_fragment Frontdoor#custom_fragment}.

---

##### `CustomHost`<sup>Optional</sup> <a name="CustomHost" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customHost"></a>

```go
CustomHost *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#custom_host Frontdoor#custom_host}.

---

##### `CustomPath`<sup>Optional</sup> <a name="CustomPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customPath"></a>

```go
CustomPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#custom_path Frontdoor#custom_path}.

---

##### `CustomQueryString`<sup>Optional</sup> <a name="CustomQueryString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customQueryString"></a>

```go
CustomQueryString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#custom_query_string Frontdoor#custom_query_string}.

---

### FrontdoorTimeouts <a name="FrontdoorTimeouts" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

&frontdoor.FrontdoorTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#create Frontdoor#create}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#delete Frontdoor#delete}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#read Frontdoor#read}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#update Frontdoor#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#create Frontdoor#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#delete Frontdoor#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#read Frontdoor#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/frontdoor#update Frontdoor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrontdoorBackendPoolBackendList <a name="FrontdoorBackendPoolBackendList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorBackendPoolBackendList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FrontdoorBackendPoolBackendList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.get"></a>

```go
func Get(index *f64) FrontdoorBackendPoolBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorBackendPoolBackendOutputReference <a name="FrontdoorBackendPoolBackendOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorBackendPoolBackendOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FrontdoorBackendPoolBackendOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeaderInput">HostHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPortInput">HttpPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPortInput">HttpsPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeader">HostHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPort">HttpPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPort">HttpsPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HostHeaderInput`<sup>Optional</sup> <a name="HostHeaderInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeaderInput"></a>

```go
func HostHeaderInput() *string
```

- *Type:* *string

---

##### `HttpPortInput`<sup>Optional</sup> <a name="HttpPortInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPortInput"></a>

```go
func HttpPortInput() *f64
```

- *Type:* *f64

---

##### `HttpsPortInput`<sup>Optional</sup> <a name="HttpsPortInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPortInput"></a>

```go
func HttpsPortInput() *f64
```

- *Type:* *f64

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HostHeader`<sup>Required</sup> <a name="HostHeader" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeader"></a>

```go
func HostHeader() *string
```

- *Type:* *string

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPort"></a>

```go
func HttpPort() *f64
```

- *Type:* *f64

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPort"></a>

```go
func HttpsPort() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorBackendPoolHealthProbeList <a name="FrontdoorBackendPoolHealthProbeList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorBackendPoolHealthProbeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FrontdoorBackendPoolHealthProbeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.get"></a>

```go
func Get(index *f64) FrontdoorBackendPoolHealthProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorBackendPoolHealthProbeOutputReference <a name="FrontdoorBackendPoolHealthProbeOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorBackendPoolHealthProbeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FrontdoorBackendPoolHealthProbeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetIntervalInSeconds">ResetIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProbeMethod">ResetProbeMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetIntervalInSeconds` <a name="ResetIntervalInSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetIntervalInSeconds"></a>

```go
func ResetIntervalInSeconds()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetProbeMethod` <a name="ResetProbeMethod" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProbeMethod"></a>

```go
func ResetProbeMethod()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSecondsInput">IntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethodInput">ProbeMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethod">ProbeMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IntervalInSecondsInput`<sup>Optional</sup> <a name="IntervalInSecondsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSecondsInput"></a>

```go
func IntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ProbeMethodInput`<sup>Optional</sup> <a name="ProbeMethodInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethodInput"></a>

```go
func ProbeMethodInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSeconds"></a>

```go
func IntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ProbeMethod`<sup>Required</sup> <a name="ProbeMethod" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethod"></a>

```go
func ProbeMethod() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorBackendPoolList <a name="FrontdoorBackendPoolList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorBackendPoolList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FrontdoorBackendPoolList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.get"></a>

```go
func Get(index *f64) FrontdoorBackendPoolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorBackendPoolLoadBalancingList <a name="FrontdoorBackendPoolLoadBalancingList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorBackendPoolLoadBalancingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FrontdoorBackendPoolLoadBalancingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.get"></a>

```go
func Get(index *f64) FrontdoorBackendPoolLoadBalancingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorBackendPoolLoadBalancingOutputReference <a name="FrontdoorBackendPoolLoadBalancingOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorBackendPoolLoadBalancingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FrontdoorBackendPoolLoadBalancingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetAdditionalLatencyMilliseconds">ResetAdditionalLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSampleSize">ResetSampleSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSuccessfulSamplesRequired">ResetSuccessfulSamplesRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalLatencyMilliseconds` <a name="ResetAdditionalLatencyMilliseconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetAdditionalLatencyMilliseconds"></a>

```go
func ResetAdditionalLatencyMilliseconds()
```

##### `ResetSampleSize` <a name="ResetSampleSize" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSampleSize"></a>

```go
func ResetSampleSize()
```

##### `ResetSuccessfulSamplesRequired` <a name="ResetSuccessfulSamplesRequired" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSuccessfulSamplesRequired"></a>

```go
func ResetSuccessfulSamplesRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMillisecondsInput">AdditionalLatencyMillisecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSizeInput">SampleSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequiredInput">SuccessfulSamplesRequiredInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMilliseconds">AdditionalLatencyMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSize">SampleSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequired">SuccessfulSamplesRequired</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AdditionalLatencyMillisecondsInput`<sup>Optional</sup> <a name="AdditionalLatencyMillisecondsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMillisecondsInput"></a>

```go
func AdditionalLatencyMillisecondsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SampleSizeInput`<sup>Optional</sup> <a name="SampleSizeInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSizeInput"></a>

```go
func SampleSizeInput() *f64
```

- *Type:* *f64

---

##### `SuccessfulSamplesRequiredInput`<sup>Optional</sup> <a name="SuccessfulSamplesRequiredInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequiredInput"></a>

```go
func SuccessfulSamplesRequiredInput() *f64
```

- *Type:* *f64

---

##### `AdditionalLatencyMilliseconds`<sup>Required</sup> <a name="AdditionalLatencyMilliseconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMilliseconds"></a>

```go
func AdditionalLatencyMilliseconds() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SampleSize`<sup>Required</sup> <a name="SampleSize" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSize"></a>

```go
func SampleSize() *f64
```

- *Type:* *f64

---

##### `SuccessfulSamplesRequired`<sup>Required</sup> <a name="SuccessfulSamplesRequired" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequired"></a>

```go
func SuccessfulSamplesRequired() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorBackendPoolOutputReference <a name="FrontdoorBackendPoolOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorBackendPoolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FrontdoorBackendPoolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.putBackend">PutBackend</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackend` <a name="PutBackend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.putBackend"></a>

```go
func PutBackend(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.putBackend.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backend">Backend</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList">FrontdoorBackendPoolBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backendInput">BackendInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeNameInput">HealthProbeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingNameInput">LoadBalancingNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeName">HealthProbeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingName">LoadBalancingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backend"></a>

```go
func Backend() FrontdoorBackendPoolBackendList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList">FrontdoorBackendPoolBackendList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backendInput"></a>

```go
func BackendInput() interface{}
```

- *Type:* interface{}

---

##### `HealthProbeNameInput`<sup>Optional</sup> <a name="HealthProbeNameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeNameInput"></a>

```go
func HealthProbeNameInput() *string
```

- *Type:* *string

---

##### `LoadBalancingNameInput`<sup>Optional</sup> <a name="LoadBalancingNameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingNameInput"></a>

```go
func LoadBalancingNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `HealthProbeName`<sup>Required</sup> <a name="HealthProbeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeName"></a>

```go
func HealthProbeName() *string
```

- *Type:* *string

---

##### `LoadBalancingName`<sup>Required</sup> <a name="LoadBalancingName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingName"></a>

```go
func LoadBalancingName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorBackendPoolSettingsList <a name="FrontdoorBackendPoolSettingsList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorBackendPoolSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FrontdoorBackendPoolSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.get"></a>

```go
func Get(index *f64) FrontdoorBackendPoolSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorBackendPoolSettingsOutputReference <a name="FrontdoorBackendPoolSettingsOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorBackendPoolSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FrontdoorBackendPoolSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resetBackendPoolsSendReceiveTimeoutSeconds">ResetBackendPoolsSendReceiveTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackendPoolsSendReceiveTimeoutSeconds` <a name="ResetBackendPoolsSendReceiveTimeoutSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resetBackendPoolsSendReceiveTimeoutSeconds"></a>

```go
func ResetBackendPoolsSendReceiveTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSecondsInput">BackendPoolsSendReceiveTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheckInput">EnforceBackendPoolsCertificateNameCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSeconds">BackendPoolsSendReceiveTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheck">EnforceBackendPoolsCertificateNameCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendPoolsSendReceiveTimeoutSecondsInput`<sup>Optional</sup> <a name="BackendPoolsSendReceiveTimeoutSecondsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSecondsInput"></a>

```go
func BackendPoolsSendReceiveTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `EnforceBackendPoolsCertificateNameCheckInput`<sup>Optional</sup> <a name="EnforceBackendPoolsCertificateNameCheckInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheckInput"></a>

```go
func EnforceBackendPoolsCertificateNameCheckInput() interface{}
```

- *Type:* interface{}

---

##### `BackendPoolsSendReceiveTimeoutSeconds`<sup>Required</sup> <a name="BackendPoolsSendReceiveTimeoutSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSeconds"></a>

```go
func BackendPoolsSendReceiveTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `EnforceBackendPoolsCertificateNameCheck`<sup>Required</sup> <a name="EnforceBackendPoolsCertificateNameCheck" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheck"></a>

```go
func EnforceBackendPoolsCertificateNameCheck() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorExplicitResourceOrderList <a name="FrontdoorExplicitResourceOrderList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorExplicitResourceOrderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FrontdoorExplicitResourceOrderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.get"></a>

```go
func Get(index *f64) FrontdoorExplicitResourceOrderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FrontdoorExplicitResourceOrderOutputReference <a name="FrontdoorExplicitResourceOrderOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorExplicitResourceOrderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FrontdoorExplicitResourceOrderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolHealthProbeIds">BackendPoolHealthProbeIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolIds">BackendPoolIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolLoadBalancingIds">BackendPoolLoadBalancingIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.frontendEndpointIds">FrontendEndpointIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.routingRuleIds">RoutingRuleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder">FrontdoorExplicitResourceOrder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendPoolHealthProbeIds`<sup>Required</sup> <a name="BackendPoolHealthProbeIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolHealthProbeIds"></a>

```go
func BackendPoolHealthProbeIds() *[]*string
```

- *Type:* *[]*string

---

##### `BackendPoolIds`<sup>Required</sup> <a name="BackendPoolIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolIds"></a>

```go
func BackendPoolIds() *[]*string
```

- *Type:* *[]*string

---

##### `BackendPoolLoadBalancingIds`<sup>Required</sup> <a name="BackendPoolLoadBalancingIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolLoadBalancingIds"></a>

```go
func BackendPoolLoadBalancingIds() *[]*string
```

- *Type:* *[]*string

---

##### `FrontendEndpointIds`<sup>Required</sup> <a name="FrontendEndpointIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.frontendEndpointIds"></a>

```go
func FrontendEndpointIds() *[]*string
```

- *Type:* *[]*string

---

##### `RoutingRuleIds`<sup>Required</sup> <a name="RoutingRuleIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.routingRuleIds"></a>

```go
func RoutingRuleIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.internalValue"></a>

```go
func InternalValue() FrontdoorExplicitResourceOrder
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder">FrontdoorExplicitResourceOrder</a>

---


### FrontdoorFrontendEndpointList <a name="FrontdoorFrontendEndpointList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorFrontendEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FrontdoorFrontendEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.get"></a>

```go
func Get(index *f64) FrontdoorFrontendEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorFrontendEndpointOutputReference <a name="FrontdoorFrontendEndpointOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorFrontendEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FrontdoorFrontendEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityEnabled">ResetSessionAffinityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityTtlSeconds">ResetSessionAffinityTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetWebApplicationFirewallPolicyLinkId">ResetWebApplicationFirewallPolicyLinkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSessionAffinityEnabled` <a name="ResetSessionAffinityEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityEnabled"></a>

```go
func ResetSessionAffinityEnabled()
```

##### `ResetSessionAffinityTtlSeconds` <a name="ResetSessionAffinityTtlSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityTtlSeconds"></a>

```go
func ResetSessionAffinityTtlSeconds()
```

##### `ResetWebApplicationFirewallPolicyLinkId` <a name="ResetWebApplicationFirewallPolicyLinkId" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetWebApplicationFirewallPolicyLinkId"></a>

```go
func ResetWebApplicationFirewallPolicyLinkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabledInput">SessionAffinityEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSecondsInput">SessionAffinityTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkIdInput">WebApplicationFirewallPolicyLinkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabled">SessionAffinityEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSeconds">SessionAffinityTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkId">WebApplicationFirewallPolicyLinkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SessionAffinityEnabledInput`<sup>Optional</sup> <a name="SessionAffinityEnabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabledInput"></a>

```go
func SessionAffinityEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SessionAffinityTtlSecondsInput`<sup>Optional</sup> <a name="SessionAffinityTtlSecondsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSecondsInput"></a>

```go
func SessionAffinityTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `WebApplicationFirewallPolicyLinkIdInput`<sup>Optional</sup> <a name="WebApplicationFirewallPolicyLinkIdInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkIdInput"></a>

```go
func WebApplicationFirewallPolicyLinkIdInput() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SessionAffinityEnabled`<sup>Required</sup> <a name="SessionAffinityEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabled"></a>

```go
func SessionAffinityEnabled() interface{}
```

- *Type:* interface{}

---

##### `SessionAffinityTtlSeconds`<sup>Required</sup> <a name="SessionAffinityTtlSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSeconds"></a>

```go
func SessionAffinityTtlSeconds() *f64
```

- *Type:* *f64

---

##### `WebApplicationFirewallPolicyLinkId`<sup>Required</sup> <a name="WebApplicationFirewallPolicyLinkId" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkId"></a>

```go
func WebApplicationFirewallPolicyLinkId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorRoutingRuleForwardingConfigurationOutputReference <a name="FrontdoorRoutingRuleForwardingConfigurationOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorRoutingRuleForwardingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FrontdoorRoutingRuleForwardingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheDuration">ResetCacheDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheEnabled">ResetCacheEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameters">ResetCacheQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameterStripDirective">ResetCacheQueryParameterStripDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheUseDynamicCompression">ResetCacheUseDynamicCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCustomForwardingPath">ResetCustomForwardingPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetForwardingProtocol">ResetForwardingProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacheDuration` <a name="ResetCacheDuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheDuration"></a>

```go
func ResetCacheDuration()
```

##### `ResetCacheEnabled` <a name="ResetCacheEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheEnabled"></a>

```go
func ResetCacheEnabled()
```

##### `ResetCacheQueryParameters` <a name="ResetCacheQueryParameters" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameters"></a>

```go
func ResetCacheQueryParameters()
```

##### `ResetCacheQueryParameterStripDirective` <a name="ResetCacheQueryParameterStripDirective" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameterStripDirective"></a>

```go
func ResetCacheQueryParameterStripDirective()
```

##### `ResetCacheUseDynamicCompression` <a name="ResetCacheUseDynamicCompression" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheUseDynamicCompression"></a>

```go
func ResetCacheUseDynamicCompression()
```

##### `ResetCustomForwardingPath` <a name="ResetCustomForwardingPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCustomForwardingPath"></a>

```go
func ResetCustomForwardingPath()
```

##### `ResetForwardingProtocol` <a name="ResetForwardingProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetForwardingProtocol"></a>

```go
func ResetForwardingProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolNameInput">BackendPoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDurationInput">CacheDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabledInput">CacheEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParametersInput">CacheQueryParametersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirectiveInput">CacheQueryParameterStripDirectiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompressionInput">CacheUseDynamicCompressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPathInput">CustomForwardingPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocolInput">ForwardingProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolName">BackendPoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDuration">CacheDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabled">CacheEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameters">CacheQueryParameters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirective">CacheQueryParameterStripDirective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompression">CacheUseDynamicCompression</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPath">CustomForwardingPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocol">ForwardingProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendPoolNameInput`<sup>Optional</sup> <a name="BackendPoolNameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolNameInput"></a>

```go
func BackendPoolNameInput() *string
```

- *Type:* *string

---

##### `CacheDurationInput`<sup>Optional</sup> <a name="CacheDurationInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDurationInput"></a>

```go
func CacheDurationInput() *string
```

- *Type:* *string

---

##### `CacheEnabledInput`<sup>Optional</sup> <a name="CacheEnabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabledInput"></a>

```go
func CacheEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CacheQueryParametersInput`<sup>Optional</sup> <a name="CacheQueryParametersInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParametersInput"></a>

```go
func CacheQueryParametersInput() *[]*string
```

- *Type:* *[]*string

---

##### `CacheQueryParameterStripDirectiveInput`<sup>Optional</sup> <a name="CacheQueryParameterStripDirectiveInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirectiveInput"></a>

```go
func CacheQueryParameterStripDirectiveInput() *string
```

- *Type:* *string

---

##### `CacheUseDynamicCompressionInput`<sup>Optional</sup> <a name="CacheUseDynamicCompressionInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompressionInput"></a>

```go
func CacheUseDynamicCompressionInput() interface{}
```

- *Type:* interface{}

---

##### `CustomForwardingPathInput`<sup>Optional</sup> <a name="CustomForwardingPathInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPathInput"></a>

```go
func CustomForwardingPathInput() *string
```

- *Type:* *string

---

##### `ForwardingProtocolInput`<sup>Optional</sup> <a name="ForwardingProtocolInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocolInput"></a>

```go
func ForwardingProtocolInput() *string
```

- *Type:* *string

---

##### `BackendPoolName`<sup>Required</sup> <a name="BackendPoolName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolName"></a>

```go
func BackendPoolName() *string
```

- *Type:* *string

---

##### `CacheDuration`<sup>Required</sup> <a name="CacheDuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDuration"></a>

```go
func CacheDuration() *string
```

- *Type:* *string

---

##### `CacheEnabled`<sup>Required</sup> <a name="CacheEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabled"></a>

```go
func CacheEnabled() interface{}
```

- *Type:* interface{}

---

##### `CacheQueryParameters`<sup>Required</sup> <a name="CacheQueryParameters" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameters"></a>

```go
func CacheQueryParameters() *[]*string
```

- *Type:* *[]*string

---

##### `CacheQueryParameterStripDirective`<sup>Required</sup> <a name="CacheQueryParameterStripDirective" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirective"></a>

```go
func CacheQueryParameterStripDirective() *string
```

- *Type:* *string

---

##### `CacheUseDynamicCompression`<sup>Required</sup> <a name="CacheUseDynamicCompression" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompression"></a>

```go
func CacheUseDynamicCompression() interface{}
```

- *Type:* interface{}

---

##### `CustomForwardingPath`<sup>Required</sup> <a name="CustomForwardingPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPath"></a>

```go
func CustomForwardingPath() *string
```

- *Type:* *string

---

##### `ForwardingProtocol`<sup>Required</sup> <a name="ForwardingProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocol"></a>

```go
func ForwardingProtocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() FrontdoorRoutingRuleForwardingConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

---


### FrontdoorRoutingRuleList <a name="FrontdoorRoutingRuleList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorRoutingRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FrontdoorRoutingRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.get"></a>

```go
func Get(index *f64) FrontdoorRoutingRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorRoutingRuleOutputReference <a name="FrontdoorRoutingRuleOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorRoutingRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FrontdoorRoutingRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration">PutForwardingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration">PutRedirectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetForwardingConfiguration">ResetForwardingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetRedirectConfiguration">ResetRedirectConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForwardingConfiguration` <a name="PutForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration"></a>

```go
func PutForwardingConfiguration(value FrontdoorRoutingRuleForwardingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

---

##### `PutRedirectConfiguration` <a name="PutRedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration"></a>

```go
func PutRedirectConfiguration(value FrontdoorRoutingRuleRedirectConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetForwardingConfiguration` <a name="ResetForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetForwardingConfiguration"></a>

```go
func ResetForwardingConfiguration()
```

##### `ResetRedirectConfiguration` <a name="ResetRedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetRedirectConfiguration"></a>

```go
func ResetRedirectConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfiguration">ForwardingConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference">FrontdoorRoutingRuleForwardingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfiguration">RedirectConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference">FrontdoorRoutingRuleRedirectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocolsInput">AcceptedProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfigurationInput">ForwardingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpointsInput">FrontendEndpointsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatchInput">PatternsToMatchInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfigurationInput">RedirectConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocols">AcceptedProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpoints">FrontendEndpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatch">PatternsToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardingConfiguration`<sup>Required</sup> <a name="ForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfiguration"></a>

```go
func ForwardingConfiguration() FrontdoorRoutingRuleForwardingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference">FrontdoorRoutingRuleForwardingConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RedirectConfiguration`<sup>Required</sup> <a name="RedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfiguration"></a>

```go
func RedirectConfiguration() FrontdoorRoutingRuleRedirectConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference">FrontdoorRoutingRuleRedirectConfigurationOutputReference</a>

---

##### `AcceptedProtocolsInput`<sup>Optional</sup> <a name="AcceptedProtocolsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocolsInput"></a>

```go
func AcceptedProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardingConfigurationInput`<sup>Optional</sup> <a name="ForwardingConfigurationInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfigurationInput"></a>

```go
func ForwardingConfigurationInput() FrontdoorRoutingRuleForwardingConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

---

##### `FrontendEndpointsInput`<sup>Optional</sup> <a name="FrontendEndpointsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpointsInput"></a>

```go
func FrontendEndpointsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PatternsToMatchInput`<sup>Optional</sup> <a name="PatternsToMatchInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatchInput"></a>

```go
func PatternsToMatchInput() *[]*string
```

- *Type:* *[]*string

---

##### `RedirectConfigurationInput`<sup>Optional</sup> <a name="RedirectConfigurationInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfigurationInput"></a>

```go
func RedirectConfigurationInput() FrontdoorRoutingRuleRedirectConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

---

##### `AcceptedProtocols`<sup>Required</sup> <a name="AcceptedProtocols" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocols"></a>

```go
func AcceptedProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `FrontendEndpoints`<sup>Required</sup> <a name="FrontendEndpoints" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpoints"></a>

```go
func FrontendEndpoints() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PatternsToMatch`<sup>Required</sup> <a name="PatternsToMatch" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatch"></a>

```go
func PatternsToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorRoutingRuleRedirectConfigurationOutputReference <a name="FrontdoorRoutingRuleRedirectConfigurationOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorRoutingRuleRedirectConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FrontdoorRoutingRuleRedirectConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomFragment">ResetCustomFragment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomHost">ResetCustomHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomPath">ResetCustomPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomQueryString">ResetCustomQueryString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomFragment` <a name="ResetCustomFragment" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomFragment"></a>

```go
func ResetCustomFragment()
```

##### `ResetCustomHost` <a name="ResetCustomHost" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomHost"></a>

```go
func ResetCustomHost()
```

##### `ResetCustomPath` <a name="ResetCustomPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomPath"></a>

```go
func ResetCustomPath()
```

##### `ResetCustomQueryString` <a name="ResetCustomQueryString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomQueryString"></a>

```go
func ResetCustomQueryString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragmentInput">CustomFragmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHostInput">CustomHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPathInput">CustomPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryStringInput">CustomQueryStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocolInput">RedirectProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectTypeInput">RedirectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragment">CustomFragment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHost">CustomHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPath">CustomPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryString">CustomQueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocol">RedirectProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectType">RedirectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomFragmentInput`<sup>Optional</sup> <a name="CustomFragmentInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragmentInput"></a>

```go
func CustomFragmentInput() *string
```

- *Type:* *string

---

##### `CustomHostInput`<sup>Optional</sup> <a name="CustomHostInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHostInput"></a>

```go
func CustomHostInput() *string
```

- *Type:* *string

---

##### `CustomPathInput`<sup>Optional</sup> <a name="CustomPathInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPathInput"></a>

```go
func CustomPathInput() *string
```

- *Type:* *string

---

##### `CustomQueryStringInput`<sup>Optional</sup> <a name="CustomQueryStringInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryStringInput"></a>

```go
func CustomQueryStringInput() *string
```

- *Type:* *string

---

##### `RedirectProtocolInput`<sup>Optional</sup> <a name="RedirectProtocolInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocolInput"></a>

```go
func RedirectProtocolInput() *string
```

- *Type:* *string

---

##### `RedirectTypeInput`<sup>Optional</sup> <a name="RedirectTypeInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectTypeInput"></a>

```go
func RedirectTypeInput() *string
```

- *Type:* *string

---

##### `CustomFragment`<sup>Required</sup> <a name="CustomFragment" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragment"></a>

```go
func CustomFragment() *string
```

- *Type:* *string

---

##### `CustomHost`<sup>Required</sup> <a name="CustomHost" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHost"></a>

```go
func CustomHost() *string
```

- *Type:* *string

---

##### `CustomPath`<sup>Required</sup> <a name="CustomPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPath"></a>

```go
func CustomPath() *string
```

- *Type:* *string

---

##### `CustomQueryString`<sup>Required</sup> <a name="CustomQueryString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryString"></a>

```go
func CustomQueryString() *string
```

- *Type:* *string

---

##### `RedirectProtocol`<sup>Required</sup> <a name="RedirectProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocol"></a>

```go
func RedirectProtocol() *string
```

- *Type:* *string

---

##### `RedirectType`<sup>Required</sup> <a name="RedirectType" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectType"></a>

```go
func RedirectType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() FrontdoorRoutingRuleRedirectConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

---


### FrontdoorTimeoutsOutputReference <a name="FrontdoorTimeoutsOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoor"

frontdoor.NewFrontdoorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FrontdoorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



