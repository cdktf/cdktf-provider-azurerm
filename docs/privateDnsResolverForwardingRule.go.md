# `privateDnsResolverForwardingRule` Submodule <a name="`privateDnsResolverForwardingRule` Submodule" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsResolverForwardingRule <a name="PrivateDnsResolverForwardingRule" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule azurerm_private_dns_resolver_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverforwardingrule"

privatednsresolverforwardingrule.NewPrivateDnsResolverForwardingRule(scope Construct, id *string, config PrivateDnsResolverForwardingRuleConfig) PrivateDnsResolverForwardingRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig">PrivateDnsResolverForwardingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig">PrivateDnsResolverForwardingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTargetDnsServers">PutTargetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargetDnsServers` <a name="PutTargetDnsServers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTargetDnsServers"></a>

```go
func PutTargetDnsServers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTargetDnsServers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTimeouts"></a>

```go
func PutTimeouts(value PrivateDnsResolverForwardingRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateDnsResolverForwardingRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverforwardingrule"

privatednsresolverforwardingrule.PrivateDnsResolverForwardingRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverforwardingrule"

privatednsresolverforwardingrule.PrivateDnsResolverForwardingRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverforwardingrule"

privatednsresolverforwardingrule.PrivateDnsResolverForwardingRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverforwardingrule"

privatednsresolverforwardingrule.PrivateDnsResolverForwardingRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PrivateDnsResolverForwardingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PrivateDnsResolverForwardingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PrivateDnsResolverForwardingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsResolverForwardingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.targetDnsServers">TargetDnsServers</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList">PrivateDnsResolverForwardingRuleTargetDnsServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference">PrivateDnsResolverForwardingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dnsForwardingRulesetIdInput">DnsForwardingRulesetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.targetDnsServersInput">TargetDnsServersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dnsForwardingRulesetId">DnsForwardingRulesetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TargetDnsServers`<sup>Required</sup> <a name="TargetDnsServers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.targetDnsServers"></a>

```go
func TargetDnsServers() PrivateDnsResolverForwardingRuleTargetDnsServersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList">PrivateDnsResolverForwardingRuleTargetDnsServersList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.timeouts"></a>

```go
func Timeouts() PrivateDnsResolverForwardingRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference">PrivateDnsResolverForwardingRuleTimeoutsOutputReference</a>

---

##### `DnsForwardingRulesetIdInput`<sup>Optional</sup> <a name="DnsForwardingRulesetIdInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dnsForwardingRulesetIdInput"></a>

```go
func DnsForwardingRulesetIdInput() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetDnsServersInput`<sup>Optional</sup> <a name="TargetDnsServersInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.targetDnsServersInput"></a>

```go
func TargetDnsServersInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DnsForwardingRulesetId`<sup>Required</sup> <a name="DnsForwardingRulesetId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dnsForwardingRulesetId"></a>

```go
func DnsForwardingRulesetId() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsResolverForwardingRuleConfig <a name="PrivateDnsResolverForwardingRuleConfig" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverforwardingrule"

&privatednsresolverforwardingrule.PrivateDnsResolverForwardingRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DnsForwardingRulesetId: *string,
	DomainName: *string,
	Name: *string,
	TargetDnsServers: interface{},
	Enabled: interface{},
	Id: *string,
	Metadata: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.dnsForwardingRulesetId">DnsForwardingRulesetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#dns_forwarding_ruleset_id PrivateDnsResolverForwardingRule#dns_forwarding_ruleset_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#domain_name PrivateDnsResolverForwardingRule#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#name PrivateDnsResolverForwardingRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.targetDnsServers">TargetDnsServers</a></code> | <code>interface{}</code> | target_dns_servers block. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#enabled PrivateDnsResolverForwardingRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#id PrivateDnsResolverForwardingRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#metadata PrivateDnsResolverForwardingRule#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DnsForwardingRulesetId`<sup>Required</sup> <a name="DnsForwardingRulesetId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.dnsForwardingRulesetId"></a>

```go
DnsForwardingRulesetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#dns_forwarding_ruleset_id PrivateDnsResolverForwardingRule#dns_forwarding_ruleset_id}.

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#domain_name PrivateDnsResolverForwardingRule#domain_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#name PrivateDnsResolverForwardingRule#name}.

---

##### `TargetDnsServers`<sup>Required</sup> <a name="TargetDnsServers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.targetDnsServers"></a>

```go
TargetDnsServers interface{}
```

- *Type:* interface{}

target_dns_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#target_dns_servers PrivateDnsResolverForwardingRule#target_dns_servers}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#enabled PrivateDnsResolverForwardingRule#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#id PrivateDnsResolverForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#metadata PrivateDnsResolverForwardingRule#metadata}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.timeouts"></a>

```go
Timeouts PrivateDnsResolverForwardingRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#timeouts PrivateDnsResolverForwardingRule#timeouts}

---

### PrivateDnsResolverForwardingRuleTargetDnsServers <a name="PrivateDnsResolverForwardingRuleTargetDnsServers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverforwardingrule"

&privatednsresolverforwardingrule.PrivateDnsResolverForwardingRuleTargetDnsServers {
	IpAddress: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.property.ipAddress">IpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#ip_address PrivateDnsResolverForwardingRule#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#port PrivateDnsResolverForwardingRule#port}. |

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#ip_address PrivateDnsResolverForwardingRule#ip_address}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#port PrivateDnsResolverForwardingRule#port}.

---

### PrivateDnsResolverForwardingRuleTimeouts <a name="PrivateDnsResolverForwardingRuleTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverforwardingrule"

&privatednsresolverforwardingrule.PrivateDnsResolverForwardingRuleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#create PrivateDnsResolverForwardingRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#delete PrivateDnsResolverForwardingRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#read PrivateDnsResolverForwardingRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#update PrivateDnsResolverForwardingRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#create PrivateDnsResolverForwardingRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#delete PrivateDnsResolverForwardingRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#read PrivateDnsResolverForwardingRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/private_dns_resolver_forwarding_rule#update PrivateDnsResolverForwardingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsResolverForwardingRuleTargetDnsServersList <a name="PrivateDnsResolverForwardingRuleTargetDnsServersList" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverforwardingrule"

privatednsresolverforwardingrule.NewPrivateDnsResolverForwardingRuleTargetDnsServersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrivateDnsResolverForwardingRuleTargetDnsServersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.get"></a>

```go
func Get(index *f64) PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference <a name="PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverforwardingrule"

privatednsresolverforwardingrule.NewPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateDnsResolverForwardingRuleTimeoutsOutputReference <a name="PrivateDnsResolverForwardingRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverforwardingrule"

privatednsresolverforwardingrule.NewPrivateDnsResolverForwardingRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivateDnsResolverForwardingRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



