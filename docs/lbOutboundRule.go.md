# `lbOutboundRule` Submodule <a name="`lbOutboundRule` Submodule" id="@cdktf/provider-azurerm.lbOutboundRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbOutboundRule <a name="LbOutboundRule" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule azurerm_lb_outbound_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lboutboundrule"

lboutboundrule.NewLbOutboundRule(scope Construct, id *string, config LbOutboundRuleConfig) LbOutboundRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig">LbOutboundRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig">LbOutboundRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putFrontendIpConfiguration">PutFrontendIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetAllocatedOutboundPorts">ResetAllocatedOutboundPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetEnableTcpReset">ResetEnableTcpReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetFrontendIpConfiguration">ResetFrontendIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetIdleTimeoutInMinutes">ResetIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetTcpResetEnabled">ResetTcpResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFrontendIpConfiguration` <a name="PutFrontendIpConfiguration" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putFrontendIpConfiguration"></a>

```go
func PutFrontendIpConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putFrontendIpConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putTimeouts"></a>

```go
func PutTimeouts(value LbOutboundRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a>

---

##### `ResetAllocatedOutboundPorts` <a name="ResetAllocatedOutboundPorts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetAllocatedOutboundPorts"></a>

```go
func ResetAllocatedOutboundPorts()
```

##### `ResetEnableTcpReset` <a name="ResetEnableTcpReset" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetEnableTcpReset"></a>

```go
func ResetEnableTcpReset()
```

##### `ResetFrontendIpConfiguration` <a name="ResetFrontendIpConfiguration" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetFrontendIpConfiguration"></a>

```go
func ResetFrontendIpConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetId"></a>

```go
func ResetId()
```

##### `ResetIdleTimeoutInMinutes` <a name="ResetIdleTimeoutInMinutes" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetIdleTimeoutInMinutes"></a>

```go
func ResetIdleTimeoutInMinutes()
```

##### `ResetTcpResetEnabled` <a name="ResetTcpResetEnabled" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetTcpResetEnabled"></a>

```go
func ResetTcpResetEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LbOutboundRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lboutboundrule"

lboutboundrule.LbOutboundRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lboutboundrule"

lboutboundrule.LbOutboundRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lboutboundrule"

lboutboundrule.LbOutboundRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lboutboundrule"

lboutboundrule.LbOutboundRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LbOutboundRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LbOutboundRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LbOutboundRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LbOutboundRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.frontendIpConfiguration">FrontendIpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList">LbOutboundRuleFrontendIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference">LbOutboundRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.allocatedOutboundPortsInput">AllocatedOutboundPortsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.backendAddressPoolIdInput">BackendAddressPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.enableTcpResetInput">EnableTcpResetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.frontendIpConfigurationInput">FrontendIpConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idleTimeoutInMinutesInput">IdleTimeoutInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.loadbalancerIdInput">LoadbalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.tcpResetEnabledInput">TcpResetEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.allocatedOutboundPorts">AllocatedOutboundPorts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.backendAddressPoolId">BackendAddressPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.enableTcpReset">EnableTcpReset</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.loadbalancerId">LoadbalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.tcpResetEnabled">TcpResetEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FrontendIpConfiguration`<sup>Required</sup> <a name="FrontendIpConfiguration" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.frontendIpConfiguration"></a>

```go
func FrontendIpConfiguration() LbOutboundRuleFrontendIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList">LbOutboundRuleFrontendIpConfigurationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.timeouts"></a>

```go
func Timeouts() LbOutboundRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference">LbOutboundRuleTimeoutsOutputReference</a>

---

##### `AllocatedOutboundPortsInput`<sup>Optional</sup> <a name="AllocatedOutboundPortsInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.allocatedOutboundPortsInput"></a>

```go
func AllocatedOutboundPortsInput() *f64
```

- *Type:* *f64

---

##### `BackendAddressPoolIdInput`<sup>Optional</sup> <a name="BackendAddressPoolIdInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.backendAddressPoolIdInput"></a>

```go
func BackendAddressPoolIdInput() *string
```

- *Type:* *string

---

##### `EnableTcpResetInput`<sup>Optional</sup> <a name="EnableTcpResetInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.enableTcpResetInput"></a>

```go
func EnableTcpResetInput() interface{}
```

- *Type:* interface{}

---

##### `FrontendIpConfigurationInput`<sup>Optional</sup> <a name="FrontendIpConfigurationInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.frontendIpConfigurationInput"></a>

```go
func FrontendIpConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="IdleTimeoutInMinutesInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idleTimeoutInMinutesInput"></a>

```go
func IdleTimeoutInMinutesInput() *f64
```

- *Type:* *f64

---

##### `LoadbalancerIdInput`<sup>Optional</sup> <a name="LoadbalancerIdInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.loadbalancerIdInput"></a>

```go
func LoadbalancerIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `TcpResetEnabledInput`<sup>Optional</sup> <a name="TcpResetEnabledInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.tcpResetEnabledInput"></a>

```go
func TcpResetEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllocatedOutboundPorts`<sup>Required</sup> <a name="AllocatedOutboundPorts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.allocatedOutboundPorts"></a>

```go
func AllocatedOutboundPorts() *f64
```

- *Type:* *f64

---

##### `BackendAddressPoolId`<sup>Required</sup> <a name="BackendAddressPoolId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.backendAddressPoolId"></a>

```go
func BackendAddressPoolId() *string
```

- *Type:* *string

---

##### `EnableTcpReset`<sup>Required</sup> <a name="EnableTcpReset" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.enableTcpReset"></a>

```go
func EnableTcpReset() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdleTimeoutInMinutes`<sup>Required</sup> <a name="IdleTimeoutInMinutes" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idleTimeoutInMinutes"></a>

```go
func IdleTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `LoadbalancerId`<sup>Required</sup> <a name="LoadbalancerId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.loadbalancerId"></a>

```go
func LoadbalancerId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `TcpResetEnabled`<sup>Required</sup> <a name="TcpResetEnabled" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.tcpResetEnabled"></a>

```go
func TcpResetEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LbOutboundRuleConfig <a name="LbOutboundRuleConfig" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lboutboundrule"

&lboutboundrule.LbOutboundRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackendAddressPoolId: *string,
	LoadbalancerId: *string,
	Name: *string,
	Protocol: *string,
	AllocatedOutboundPorts: *f64,
	EnableTcpReset: interface{},
	FrontendIpConfiguration: interface{},
	Id: *string,
	IdleTimeoutInMinutes: *f64,
	TcpResetEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.lbOutboundRule.LbOutboundRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.backendAddressPoolId">BackendAddressPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#backend_address_pool_id LbOutboundRule#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.loadbalancerId">LoadbalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#loadbalancer_id LbOutboundRule#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#name LbOutboundRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#protocol LbOutboundRule#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.allocatedOutboundPorts">AllocatedOutboundPorts</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#allocated_outbound_ports LbOutboundRule#allocated_outbound_ports}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.enableTcpReset">EnableTcpReset</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#enable_tcp_reset LbOutboundRule#enable_tcp_reset}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.frontendIpConfiguration">FrontendIpConfiguration</a></code> | <code>interface{}</code> | frontend_ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#id LbOutboundRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#idle_timeout_in_minutes LbOutboundRule#idle_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.tcpResetEnabled">TcpResetEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#tcp_reset_enabled LbOutboundRule#tcp_reset_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendAddressPoolId`<sup>Required</sup> <a name="BackendAddressPoolId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.backendAddressPoolId"></a>

```go
BackendAddressPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#backend_address_pool_id LbOutboundRule#backend_address_pool_id}.

---

##### `LoadbalancerId`<sup>Required</sup> <a name="LoadbalancerId" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.loadbalancerId"></a>

```go
LoadbalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#loadbalancer_id LbOutboundRule#loadbalancer_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#name LbOutboundRule#name}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#protocol LbOutboundRule#protocol}.

---

##### `AllocatedOutboundPorts`<sup>Optional</sup> <a name="AllocatedOutboundPorts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.allocatedOutboundPorts"></a>

```go
AllocatedOutboundPorts *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#allocated_outbound_ports LbOutboundRule#allocated_outbound_ports}.

---

##### `EnableTcpReset`<sup>Optional</sup> <a name="EnableTcpReset" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.enableTcpReset"></a>

```go
EnableTcpReset interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#enable_tcp_reset LbOutboundRule#enable_tcp_reset}.

---

##### `FrontendIpConfiguration`<sup>Optional</sup> <a name="FrontendIpConfiguration" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.frontendIpConfiguration"></a>

```go
FrontendIpConfiguration interface{}
```

- *Type:* interface{}

frontend_ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#frontend_ip_configuration LbOutboundRule#frontend_ip_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#id LbOutboundRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdleTimeoutInMinutes`<sup>Optional</sup> <a name="IdleTimeoutInMinutes" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.idleTimeoutInMinutes"></a>

```go
IdleTimeoutInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#idle_timeout_in_minutes LbOutboundRule#idle_timeout_in_minutes}.

---

##### `TcpResetEnabled`<sup>Optional</sup> <a name="TcpResetEnabled" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.tcpResetEnabled"></a>

```go
TcpResetEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#tcp_reset_enabled LbOutboundRule#tcp_reset_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.timeouts"></a>

```go
Timeouts LbOutboundRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#timeouts LbOutboundRule#timeouts}

---

### LbOutboundRuleFrontendIpConfiguration <a name="LbOutboundRuleFrontendIpConfiguration" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lboutboundrule"

&lboutboundrule.LbOutboundRuleFrontendIpConfiguration {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#name LbOutboundRule#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#name LbOutboundRule#name}.

---

### LbOutboundRuleTimeouts <a name="LbOutboundRuleTimeouts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lboutboundrule"

&lboutboundrule.LbOutboundRuleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#create LbOutboundRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#delete LbOutboundRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#read LbOutboundRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#update LbOutboundRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#create LbOutboundRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#delete LbOutboundRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#read LbOutboundRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/lb_outbound_rule#update LbOutboundRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbOutboundRuleFrontendIpConfigurationList <a name="LbOutboundRuleFrontendIpConfigurationList" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lboutboundrule"

lboutboundrule.NewLbOutboundRuleFrontendIpConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LbOutboundRuleFrontendIpConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.get"></a>

```go
func Get(index *f64) LbOutboundRuleFrontendIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbOutboundRuleFrontendIpConfigurationOutputReference <a name="LbOutboundRuleFrontendIpConfigurationOutputReference" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lboutboundrule"

lboutboundrule.NewLbOutboundRuleFrontendIpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LbOutboundRuleFrontendIpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbOutboundRuleTimeoutsOutputReference <a name="LbOutboundRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/lboutboundrule"

lboutboundrule.NewLbOutboundRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbOutboundRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



