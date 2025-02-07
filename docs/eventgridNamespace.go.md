# `eventgridNamespace` Submodule <a name="`eventgridNamespace` Submodule" id="@cdktf/provider-azurerm.eventgridNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridNamespace <a name="EventgridNamespace" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace azurerm_eventgrid_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

eventgridnamespace.NewEventgridNamespace(scope Construct, id *string, config EventgridNamespaceConfig) EventgridNamespace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig">EventgridNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig">EventgridNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putInboundIpRule">PutInboundIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putTopicSpacesConfiguration">PutTopicSpacesConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetInboundIpRule">ResetInboundIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetPublicNetworkAccess">ResetPublicNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetSku">ResetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetTopicSpacesConfiguration">ResetTopicSpacesConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putIdentity"></a>

```go
func PutIdentity(value EventgridNamespaceIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity">EventgridNamespaceIdentity</a>

---

##### `PutInboundIpRule` <a name="PutInboundIpRule" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putInboundIpRule"></a>

```go
func PutInboundIpRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putInboundIpRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putTimeouts"></a>

```go
func PutTimeouts(value EventgridNamespaceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts">EventgridNamespaceTimeouts</a>

---

##### `PutTopicSpacesConfiguration` <a name="PutTopicSpacesConfiguration" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putTopicSpacesConfiguration"></a>

```go
func PutTopicSpacesConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.putTopicSpacesConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetCapacity"></a>

```go
func ResetCapacity()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetInboundIpRule` <a name="ResetInboundIpRule" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetInboundIpRule"></a>

```go
func ResetInboundIpRule()
```

##### `ResetPublicNetworkAccess` <a name="ResetPublicNetworkAccess" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetPublicNetworkAccess"></a>

```go
func ResetPublicNetworkAccess()
```

##### `ResetSku` <a name="ResetSku" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetSku"></a>

```go
func ResetSku()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTopicSpacesConfiguration` <a name="ResetTopicSpacesConfiguration" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.resetTopicSpacesConfiguration"></a>

```go
func ResetTopicSpacesConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventgridNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

eventgridnamespace.EventgridNamespace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

eventgridnamespace.EventgridNamespace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

eventgridnamespace.EventgridNamespace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

eventgridnamespace.EventgridNamespace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EventgridNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EventgridNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EventgridNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EventgridNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference">EventgridNamespaceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.inboundIpRule">InboundIpRule</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList">EventgridNamespaceInboundIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference">EventgridNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.topicSpacesConfiguration">TopicSpacesConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList">EventgridNamespaceTopicSpacesConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.capacityInput">CapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity">EventgridNamespaceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.inboundIpRuleInput">InboundIpRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.publicNetworkAccessInput">PublicNetworkAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.topicSpacesConfigurationInput">TopicSpacesConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.publicNetworkAccess">PublicNetworkAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.identity"></a>

```go
func Identity() EventgridNamespaceIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference">EventgridNamespaceIdentityOutputReference</a>

---

##### `InboundIpRule`<sup>Required</sup> <a name="InboundIpRule" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.inboundIpRule"></a>

```go
func InboundIpRule() EventgridNamespaceInboundIpRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList">EventgridNamespaceInboundIpRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.timeouts"></a>

```go
func Timeouts() EventgridNamespaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference">EventgridNamespaceTimeoutsOutputReference</a>

---

##### `TopicSpacesConfiguration`<sup>Required</sup> <a name="TopicSpacesConfiguration" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.topicSpacesConfiguration"></a>

```go
func TopicSpacesConfiguration() EventgridNamespaceTopicSpacesConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList">EventgridNamespaceTopicSpacesConfigurationList</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.capacityInput"></a>

```go
func CapacityInput() *f64
```

- *Type:* *f64

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.identityInput"></a>

```go
func IdentityInput() EventgridNamespaceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity">EventgridNamespaceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InboundIpRuleInput`<sup>Optional</sup> <a name="InboundIpRuleInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.inboundIpRuleInput"></a>

```go
func InboundIpRuleInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessInput`<sup>Optional</sup> <a name="PublicNetworkAccessInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.publicNetworkAccessInput"></a>

```go
func PublicNetworkAccessInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TopicSpacesConfigurationInput`<sup>Optional</sup> <a name="TopicSpacesConfigurationInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.topicSpacesConfigurationInput"></a>

```go
func TopicSpacesConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicNetworkAccess`<sup>Required</sup> <a name="PublicNetworkAccess" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.publicNetworkAccess"></a>

```go
func PublicNetworkAccess() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridNamespaceConfig <a name="EventgridNamespaceConfig" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

&eventgridnamespace.EventgridNamespaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Capacity: *f64,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.eventgridNamespace.EventgridNamespaceIdentity,
	InboundIpRule: interface{},
	PublicNetworkAccess: *string,
	Sku: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.eventgridNamespace.EventgridNamespaceTimeouts,
	TopicSpacesConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#location EventgridNamespace#location}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#name EventgridNamespace#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#resource_group_name EventgridNamespace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.capacity">Capacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#capacity EventgridNamespace#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#id EventgridNamespace#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity">EventgridNamespaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.inboundIpRule">InboundIpRule</a></code> | <code>interface{}</code> | inbound_ip_rule block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.publicNetworkAccess">PublicNetworkAccess</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#public_network_access EventgridNamespace#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#sku EventgridNamespace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#tags EventgridNamespace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts">EventgridNamespaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.topicSpacesConfiguration">TopicSpacesConfiguration</a></code> | <code>interface{}</code> | topic_spaces_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#location EventgridNamespace#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#name EventgridNamespace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#resource_group_name EventgridNamespace#resource_group_name}.

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.capacity"></a>

```go
Capacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#capacity EventgridNamespace#capacity}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#id EventgridNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.identity"></a>

```go
Identity EventgridNamespaceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity">EventgridNamespaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#identity EventgridNamespace#identity}

---

##### `InboundIpRule`<sup>Optional</sup> <a name="InboundIpRule" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.inboundIpRule"></a>

```go
InboundIpRule interface{}
```

- *Type:* interface{}

inbound_ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#inbound_ip_rule EventgridNamespace#inbound_ip_rule}

---

##### `PublicNetworkAccess`<sup>Optional</sup> <a name="PublicNetworkAccess" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.publicNetworkAccess"></a>

```go
PublicNetworkAccess *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#public_network_access EventgridNamespace#public_network_access}.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#sku EventgridNamespace#sku}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#tags EventgridNamespace#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.timeouts"></a>

```go
Timeouts EventgridNamespaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts">EventgridNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#timeouts EventgridNamespace#timeouts}

---

##### `TopicSpacesConfiguration`<sup>Optional</sup> <a name="TopicSpacesConfiguration" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceConfig.property.topicSpacesConfiguration"></a>

```go
TopicSpacesConfiguration interface{}
```

- *Type:* interface{}

topic_spaces_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#topic_spaces_configuration EventgridNamespace#topic_spaces_configuration}

---

### EventgridNamespaceIdentity <a name="EventgridNamespaceIdentity" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

&eventgridnamespace.EventgridNamespaceIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#type EventgridNamespace#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#identity_ids EventgridNamespace#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#type EventgridNamespace#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#identity_ids EventgridNamespace#identity_ids}.

---

### EventgridNamespaceInboundIpRule <a name="EventgridNamespaceInboundIpRule" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

&eventgridnamespace.EventgridNamespaceInboundIpRule {
	IpMask: *string,
	Action: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRule.property.ipMask">IpMask</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#ip_mask EventgridNamespace#ip_mask}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRule.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#action EventgridNamespace#action}. |

---

##### `IpMask`<sup>Required</sup> <a name="IpMask" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRule.property.ipMask"></a>

```go
IpMask *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#ip_mask EventgridNamespace#ip_mask}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRule.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#action EventgridNamespace#action}.

---

### EventgridNamespaceTimeouts <a name="EventgridNamespaceTimeouts" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

&eventgridnamespace.EventgridNamespaceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#create EventgridNamespace#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#delete EventgridNamespace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#read EventgridNamespace#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#update EventgridNamespace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#create EventgridNamespace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#delete EventgridNamespace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#read EventgridNamespace#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#update EventgridNamespace#update}.

---

### EventgridNamespaceTopicSpacesConfiguration <a name="EventgridNamespaceTopicSpacesConfiguration" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

&eventgridnamespace.EventgridNamespaceTopicSpacesConfiguration {
	AlternativeAuthenticationNameSource: *[]*string,
	DynamicRoutingEnrichment: interface{},
	MaximumClientSessionsPerAuthenticationName: *f64,
	MaximumSessionExpiryInHours: *f64,
	RouteTopicId: *string,
	StaticRoutingEnrichment: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.alternativeAuthenticationNameSource">AlternativeAuthenticationNameSource</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#alternative_authentication_name_source EventgridNamespace#alternative_authentication_name_source}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.dynamicRoutingEnrichment">DynamicRoutingEnrichment</a></code> | <code>interface{}</code> | dynamic_routing_enrichment block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.maximumClientSessionsPerAuthenticationName">MaximumClientSessionsPerAuthenticationName</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#maximum_client_sessions_per_authentication_name EventgridNamespace#maximum_client_sessions_per_authentication_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.maximumSessionExpiryInHours">MaximumSessionExpiryInHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#maximum_session_expiry_in_hours EventgridNamespace#maximum_session_expiry_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.routeTopicId">RouteTopicId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#route_topic_id EventgridNamespace#route_topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.staticRoutingEnrichment">StaticRoutingEnrichment</a></code> | <code>interface{}</code> | static_routing_enrichment block. |

---

##### `AlternativeAuthenticationNameSource`<sup>Optional</sup> <a name="AlternativeAuthenticationNameSource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.alternativeAuthenticationNameSource"></a>

```go
AlternativeAuthenticationNameSource *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#alternative_authentication_name_source EventgridNamespace#alternative_authentication_name_source}.

---

##### `DynamicRoutingEnrichment`<sup>Optional</sup> <a name="DynamicRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.dynamicRoutingEnrichment"></a>

```go
DynamicRoutingEnrichment interface{}
```

- *Type:* interface{}

dynamic_routing_enrichment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#dynamic_routing_enrichment EventgridNamespace#dynamic_routing_enrichment}

---

##### `MaximumClientSessionsPerAuthenticationName`<sup>Optional</sup> <a name="MaximumClientSessionsPerAuthenticationName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.maximumClientSessionsPerAuthenticationName"></a>

```go
MaximumClientSessionsPerAuthenticationName *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#maximum_client_sessions_per_authentication_name EventgridNamespace#maximum_client_sessions_per_authentication_name}.

---

##### `MaximumSessionExpiryInHours`<sup>Optional</sup> <a name="MaximumSessionExpiryInHours" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.maximumSessionExpiryInHours"></a>

```go
MaximumSessionExpiryInHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#maximum_session_expiry_in_hours EventgridNamespace#maximum_session_expiry_in_hours}.

---

##### `RouteTopicId`<sup>Optional</sup> <a name="RouteTopicId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.routeTopicId"></a>

```go
RouteTopicId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#route_topic_id EventgridNamespace#route_topic_id}.

---

##### `StaticRoutingEnrichment`<sup>Optional</sup> <a name="StaticRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfiguration.property.staticRoutingEnrichment"></a>

```go
StaticRoutingEnrichment interface{}
```

- *Type:* interface{}

static_routing_enrichment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#static_routing_enrichment EventgridNamespace#static_routing_enrichment}

---

### EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment <a name="EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

&eventgridnamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#key EventgridNamespace#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#value EventgridNamespace#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#key EventgridNamespace#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichment.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#value EventgridNamespace#value}.

---

### EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment <a name="EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

&eventgridnamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#key EventgridNamespace#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#value EventgridNamespace#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#key EventgridNamespace#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichment.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/eventgrid_namespace#value EventgridNamespace#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridNamespaceIdentityOutputReference <a name="EventgridNamespaceIdentityOutputReference" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

eventgridnamespace.NewEventgridNamespaceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventgridNamespaceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity">EventgridNamespaceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() EventgridNamespaceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceIdentity">EventgridNamespaceIdentity</a>

---


### EventgridNamespaceInboundIpRuleList <a name="EventgridNamespaceInboundIpRuleList" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

eventgridnamespace.NewEventgridNamespaceInboundIpRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridNamespaceInboundIpRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.get"></a>

```go
func Get(index *f64) EventgridNamespaceInboundIpRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridNamespaceInboundIpRuleOutputReference <a name="EventgridNamespaceInboundIpRuleOutputReference" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

eventgridnamespace.NewEventgridNamespaceInboundIpRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridNamespaceInboundIpRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.resetAction"></a>

```go
func ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.ipMaskInput">IpMaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.ipMask">IpMask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `IpMaskInput`<sup>Optional</sup> <a name="IpMaskInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.ipMaskInput"></a>

```go
func IpMaskInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `IpMask`<sup>Required</sup> <a name="IpMask" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.ipMask"></a>

```go
func IpMask() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceInboundIpRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridNamespaceTimeoutsOutputReference <a name="EventgridNamespaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

eventgridnamespace.NewEventgridNamespaceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventgridNamespaceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList <a name="EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

eventgridnamespace.NewEventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.get"></a>

```go
func Get(index *f64) EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference <a name="EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

eventgridnamespace.NewEventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridNamespaceTopicSpacesConfigurationList <a name="EventgridNamespaceTopicSpacesConfigurationList" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

eventgridnamespace.NewEventgridNamespaceTopicSpacesConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridNamespaceTopicSpacesConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.get"></a>

```go
func Get(index *f64) EventgridNamespaceTopicSpacesConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridNamespaceTopicSpacesConfigurationOutputReference <a name="EventgridNamespaceTopicSpacesConfigurationOutputReference" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

eventgridnamespace.NewEventgridNamespaceTopicSpacesConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridNamespaceTopicSpacesConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.putDynamicRoutingEnrichment">PutDynamicRoutingEnrichment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.putStaticRoutingEnrichment">PutStaticRoutingEnrichment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetAlternativeAuthenticationNameSource">ResetAlternativeAuthenticationNameSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetDynamicRoutingEnrichment">ResetDynamicRoutingEnrichment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetMaximumClientSessionsPerAuthenticationName">ResetMaximumClientSessionsPerAuthenticationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetMaximumSessionExpiryInHours">ResetMaximumSessionExpiryInHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetRouteTopicId">ResetRouteTopicId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetStaticRoutingEnrichment">ResetStaticRoutingEnrichment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDynamicRoutingEnrichment` <a name="PutDynamicRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.putDynamicRoutingEnrichment"></a>

```go
func PutDynamicRoutingEnrichment(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.putDynamicRoutingEnrichment.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStaticRoutingEnrichment` <a name="PutStaticRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.putStaticRoutingEnrichment"></a>

```go
func PutStaticRoutingEnrichment(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.putStaticRoutingEnrichment.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlternativeAuthenticationNameSource` <a name="ResetAlternativeAuthenticationNameSource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetAlternativeAuthenticationNameSource"></a>

```go
func ResetAlternativeAuthenticationNameSource()
```

##### `ResetDynamicRoutingEnrichment` <a name="ResetDynamicRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetDynamicRoutingEnrichment"></a>

```go
func ResetDynamicRoutingEnrichment()
```

##### `ResetMaximumClientSessionsPerAuthenticationName` <a name="ResetMaximumClientSessionsPerAuthenticationName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetMaximumClientSessionsPerAuthenticationName"></a>

```go
func ResetMaximumClientSessionsPerAuthenticationName()
```

##### `ResetMaximumSessionExpiryInHours` <a name="ResetMaximumSessionExpiryInHours" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetMaximumSessionExpiryInHours"></a>

```go
func ResetMaximumSessionExpiryInHours()
```

##### `ResetRouteTopicId` <a name="ResetRouteTopicId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetRouteTopicId"></a>

```go
func ResetRouteTopicId()
```

##### `ResetStaticRoutingEnrichment` <a name="ResetStaticRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.resetStaticRoutingEnrichment"></a>

```go
func ResetStaticRoutingEnrichment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.dynamicRoutingEnrichment">DynamicRoutingEnrichment</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList">EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.staticRoutingEnrichment">StaticRoutingEnrichment</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList">EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.alternativeAuthenticationNameSourceInput">AlternativeAuthenticationNameSourceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.dynamicRoutingEnrichmentInput">DynamicRoutingEnrichmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.maximumClientSessionsPerAuthenticationNameInput">MaximumClientSessionsPerAuthenticationNameInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.maximumSessionExpiryInHoursInput">MaximumSessionExpiryInHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.routeTopicIdInput">RouteTopicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.staticRoutingEnrichmentInput">StaticRoutingEnrichmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.alternativeAuthenticationNameSource">AlternativeAuthenticationNameSource</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.maximumClientSessionsPerAuthenticationName">MaximumClientSessionsPerAuthenticationName</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.maximumSessionExpiryInHours">MaximumSessionExpiryInHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.routeTopicId">RouteTopicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DynamicRoutingEnrichment`<sup>Required</sup> <a name="DynamicRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.dynamicRoutingEnrichment"></a>

```go
func DynamicRoutingEnrichment() EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList">EventgridNamespaceTopicSpacesConfigurationDynamicRoutingEnrichmentList</a>

---

##### `StaticRoutingEnrichment`<sup>Required</sup> <a name="StaticRoutingEnrichment" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.staticRoutingEnrichment"></a>

```go
func StaticRoutingEnrichment() EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList">EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList</a>

---

##### `AlternativeAuthenticationNameSourceInput`<sup>Optional</sup> <a name="AlternativeAuthenticationNameSourceInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.alternativeAuthenticationNameSourceInput"></a>

```go
func AlternativeAuthenticationNameSourceInput() *[]*string
```

- *Type:* *[]*string

---

##### `DynamicRoutingEnrichmentInput`<sup>Optional</sup> <a name="DynamicRoutingEnrichmentInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.dynamicRoutingEnrichmentInput"></a>

```go
func DynamicRoutingEnrichmentInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumClientSessionsPerAuthenticationNameInput`<sup>Optional</sup> <a name="MaximumClientSessionsPerAuthenticationNameInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.maximumClientSessionsPerAuthenticationNameInput"></a>

```go
func MaximumClientSessionsPerAuthenticationNameInput() *f64
```

- *Type:* *f64

---

##### `MaximumSessionExpiryInHoursInput`<sup>Optional</sup> <a name="MaximumSessionExpiryInHoursInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.maximumSessionExpiryInHoursInput"></a>

```go
func MaximumSessionExpiryInHoursInput() *f64
```

- *Type:* *f64

---

##### `RouteTopicIdInput`<sup>Optional</sup> <a name="RouteTopicIdInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.routeTopicIdInput"></a>

```go
func RouteTopicIdInput() *string
```

- *Type:* *string

---

##### `StaticRoutingEnrichmentInput`<sup>Optional</sup> <a name="StaticRoutingEnrichmentInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.staticRoutingEnrichmentInput"></a>

```go
func StaticRoutingEnrichmentInput() interface{}
```

- *Type:* interface{}

---

##### `AlternativeAuthenticationNameSource`<sup>Required</sup> <a name="AlternativeAuthenticationNameSource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.alternativeAuthenticationNameSource"></a>

```go
func AlternativeAuthenticationNameSource() *[]*string
```

- *Type:* *[]*string

---

##### `MaximumClientSessionsPerAuthenticationName`<sup>Required</sup> <a name="MaximumClientSessionsPerAuthenticationName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.maximumClientSessionsPerAuthenticationName"></a>

```go
func MaximumClientSessionsPerAuthenticationName() *f64
```

- *Type:* *f64

---

##### `MaximumSessionExpiryInHours`<sup>Required</sup> <a name="MaximumSessionExpiryInHours" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.maximumSessionExpiryInHours"></a>

```go
func MaximumSessionExpiryInHours() *f64
```

- *Type:* *f64

---

##### `RouteTopicId`<sup>Required</sup> <a name="RouteTopicId" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.routeTopicId"></a>

```go
func RouteTopicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList <a name="EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

eventgridnamespace.NewEventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.get"></a>

```go
func Get(index *f64) EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference <a name="EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/eventgridnamespace"

eventgridnamespace.NewEventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridNamespace.EventgridNamespaceTopicSpacesConfigurationStaticRoutingEnrichmentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



