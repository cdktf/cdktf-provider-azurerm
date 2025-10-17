# `eventgridPartnerNamespace` Submodule <a name="`eventgridPartnerNamespace` Submodule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridPartnerNamespace <a name="EventgridPartnerNamespace" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace azurerm_eventgrid_partner_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnernamespace"

eventgridpartnernamespace.NewEventgridPartnerNamespace(scope Construct, id *string, config EventgridPartnerNamespaceConfig) EventgridPartnerNamespace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig">EventgridPartnerNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig">EventgridPartnerNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putInboundIpRule">PutInboundIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetInboundIpRule">ResetInboundIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetLocalAuthenticationEnabled">ResetLocalAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetPartnerTopicRoutingMode">ResetPartnerTopicRoutingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetPublicNetworkAccess">ResetPublicNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInboundIpRule` <a name="PutInboundIpRule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putInboundIpRule"></a>

```go
func PutInboundIpRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putInboundIpRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putTimeouts"></a>

```go
func PutTimeouts(value EventgridPartnerNamespaceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetId"></a>

```go
func ResetId()
```

##### `ResetInboundIpRule` <a name="ResetInboundIpRule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetInboundIpRule"></a>

```go
func ResetInboundIpRule()
```

##### `ResetLocalAuthenticationEnabled` <a name="ResetLocalAuthenticationEnabled" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetLocalAuthenticationEnabled"></a>

```go
func ResetLocalAuthenticationEnabled()
```

##### `ResetPartnerTopicRoutingMode` <a name="ResetPartnerTopicRoutingMode" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetPartnerTopicRoutingMode"></a>

```go
func ResetPartnerTopicRoutingMode()
```

##### `ResetPublicNetworkAccess` <a name="ResetPublicNetworkAccess" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetPublicNetworkAccess"></a>

```go
func ResetPublicNetworkAccess()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventgridPartnerNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnernamespace"

eventgridpartnernamespace.EventgridPartnerNamespace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnernamespace"

eventgridpartnernamespace.EventgridPartnerNamespace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnernamespace"

eventgridpartnernamespace.EventgridPartnerNamespace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnernamespace"

eventgridpartnernamespace.EventgridPartnerNamespace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EventgridPartnerNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EventgridPartnerNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EventgridPartnerNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EventgridPartnerNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.inboundIpRule">InboundIpRule</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList">EventgridPartnerNamespaceInboundIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference">EventgridPartnerNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.inboundIpRuleInput">InboundIpRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.localAuthenticationEnabledInput">LocalAuthenticationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerRegistrationIdInput">PartnerRegistrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerTopicRoutingModeInput">PartnerTopicRoutingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.publicNetworkAccessInput">PublicNetworkAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.localAuthenticationEnabled">LocalAuthenticationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerRegistrationId">PartnerRegistrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerTopicRoutingMode">PartnerTopicRoutingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.publicNetworkAccess">PublicNetworkAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `InboundIpRule`<sup>Required</sup> <a name="InboundIpRule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.inboundIpRule"></a>

```go
func InboundIpRule() EventgridPartnerNamespaceInboundIpRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList">EventgridPartnerNamespaceInboundIpRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.timeouts"></a>

```go
func Timeouts() EventgridPartnerNamespaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference">EventgridPartnerNamespaceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InboundIpRuleInput`<sup>Optional</sup> <a name="InboundIpRuleInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.inboundIpRuleInput"></a>

```go
func InboundIpRuleInput() interface{}
```

- *Type:* interface{}

---

##### `LocalAuthenticationEnabledInput`<sup>Optional</sup> <a name="LocalAuthenticationEnabledInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.localAuthenticationEnabledInput"></a>

```go
func LocalAuthenticationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartnerRegistrationIdInput`<sup>Optional</sup> <a name="PartnerRegistrationIdInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerRegistrationIdInput"></a>

```go
func PartnerRegistrationIdInput() *string
```

- *Type:* *string

---

##### `PartnerTopicRoutingModeInput`<sup>Optional</sup> <a name="PartnerTopicRoutingModeInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerTopicRoutingModeInput"></a>

```go
func PartnerTopicRoutingModeInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessInput`<sup>Optional</sup> <a name="PublicNetworkAccessInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.publicNetworkAccessInput"></a>

```go
func PublicNetworkAccessInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalAuthenticationEnabled`<sup>Required</sup> <a name="LocalAuthenticationEnabled" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.localAuthenticationEnabled"></a>

```go
func LocalAuthenticationEnabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartnerRegistrationId`<sup>Required</sup> <a name="PartnerRegistrationId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerRegistrationId"></a>

```go
func PartnerRegistrationId() *string
```

- *Type:* *string

---

##### `PartnerTopicRoutingMode`<sup>Required</sup> <a name="PartnerTopicRoutingMode" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerTopicRoutingMode"></a>

```go
func PartnerTopicRoutingMode() *string
```

- *Type:* *string

---

##### `PublicNetworkAccess`<sup>Required</sup> <a name="PublicNetworkAccess" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.publicNetworkAccess"></a>

```go
func PublicNetworkAccess() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridPartnerNamespaceConfig <a name="EventgridPartnerNamespaceConfig" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnernamespace"

&eventgridpartnernamespace.EventgridPartnerNamespaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	PartnerRegistrationId: *string,
	ResourceGroupName: *string,
	Id: *string,
	InboundIpRule: interface{},
	LocalAuthenticationEnabled: interface{},
	PartnerTopicRoutingMode: *string,
	PublicNetworkAccess: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#location EventgridPartnerNamespace#location}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#name EventgridPartnerNamespace#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.partnerRegistrationId">PartnerRegistrationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#partner_registration_id EventgridPartnerNamespace#partner_registration_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#resource_group_name EventgridPartnerNamespace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#id EventgridPartnerNamespace#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.inboundIpRule">InboundIpRule</a></code> | <code>interface{}</code> | inbound_ip_rule block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.localAuthenticationEnabled">LocalAuthenticationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#local_authentication_enabled EventgridPartnerNamespace#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.partnerTopicRoutingMode">PartnerTopicRoutingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#partner_topic_routing_mode EventgridPartnerNamespace#partner_topic_routing_mode}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.publicNetworkAccess">PublicNetworkAccess</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#public_network_access EventgridPartnerNamespace#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#tags EventgridPartnerNamespace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#location EventgridPartnerNamespace#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#name EventgridPartnerNamespace#name}.

---

##### `PartnerRegistrationId`<sup>Required</sup> <a name="PartnerRegistrationId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.partnerRegistrationId"></a>

```go
PartnerRegistrationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#partner_registration_id EventgridPartnerNamespace#partner_registration_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#resource_group_name EventgridPartnerNamespace#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#id EventgridPartnerNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InboundIpRule`<sup>Optional</sup> <a name="InboundIpRule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.inboundIpRule"></a>

```go
InboundIpRule interface{}
```

- *Type:* interface{}

inbound_ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#inbound_ip_rule EventgridPartnerNamespace#inbound_ip_rule}

---

##### `LocalAuthenticationEnabled`<sup>Optional</sup> <a name="LocalAuthenticationEnabled" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.localAuthenticationEnabled"></a>

```go
LocalAuthenticationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#local_authentication_enabled EventgridPartnerNamespace#local_authentication_enabled}.

---

##### `PartnerTopicRoutingMode`<sup>Optional</sup> <a name="PartnerTopicRoutingMode" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.partnerTopicRoutingMode"></a>

```go
PartnerTopicRoutingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#partner_topic_routing_mode EventgridPartnerNamespace#partner_topic_routing_mode}.

---

##### `PublicNetworkAccess`<sup>Optional</sup> <a name="PublicNetworkAccess" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.publicNetworkAccess"></a>

```go
PublicNetworkAccess *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#public_network_access EventgridPartnerNamespace#public_network_access}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#tags EventgridPartnerNamespace#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.timeouts"></a>

```go
Timeouts EventgridPartnerNamespaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#timeouts EventgridPartnerNamespace#timeouts}

---

### EventgridPartnerNamespaceInboundIpRule <a name="EventgridPartnerNamespaceInboundIpRule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnernamespace"

&eventgridpartnernamespace.EventgridPartnerNamespaceInboundIpRule {
	IpMask: *string,
	Action: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule.property.ipMask">IpMask</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#ip_mask EventgridPartnerNamespace#ip_mask}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#action EventgridPartnerNamespace#action}. |

---

##### `IpMask`<sup>Required</sup> <a name="IpMask" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule.property.ipMask"></a>

```go
IpMask *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#ip_mask EventgridPartnerNamespace#ip_mask}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#action EventgridPartnerNamespace#action}.

---

### EventgridPartnerNamespaceTimeouts <a name="EventgridPartnerNamespaceTimeouts" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnernamespace"

&eventgridpartnernamespace.EventgridPartnerNamespaceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#create EventgridPartnerNamespace#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#delete EventgridPartnerNamespace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#read EventgridPartnerNamespace#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#update EventgridPartnerNamespace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#create EventgridPartnerNamespace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#delete EventgridPartnerNamespace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#read EventgridPartnerNamespace#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#update EventgridPartnerNamespace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridPartnerNamespaceInboundIpRuleList <a name="EventgridPartnerNamespaceInboundIpRuleList" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnernamespace"

eventgridpartnernamespace.NewEventgridPartnerNamespaceInboundIpRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridPartnerNamespaceInboundIpRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.get"></a>

```go
func Get(index *f64) EventgridPartnerNamespaceInboundIpRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridPartnerNamespaceInboundIpRuleOutputReference <a name="EventgridPartnerNamespaceInboundIpRuleOutputReference" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnernamespace"

eventgridpartnernamespace.NewEventgridPartnerNamespaceInboundIpRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridPartnerNamespaceInboundIpRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.resetAction"></a>

```go
func ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.ipMaskInput">IpMaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.ipMask">IpMask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `IpMaskInput`<sup>Optional</sup> <a name="IpMaskInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.ipMaskInput"></a>

```go
func IpMaskInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `IpMask`<sup>Required</sup> <a name="IpMask" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.ipMask"></a>

```go
func IpMask() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridPartnerNamespaceTimeoutsOutputReference <a name="EventgridPartnerNamespaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnernamespace"

eventgridpartnernamespace.NewEventgridPartnerNamespaceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventgridPartnerNamespaceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



