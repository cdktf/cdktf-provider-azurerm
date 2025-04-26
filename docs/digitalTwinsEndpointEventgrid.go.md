# `digitalTwinsEndpointEventgrid` Submodule <a name="`digitalTwinsEndpointEventgrid` Submodule" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitalTwinsEndpointEventgrid <a name="DigitalTwinsEndpointEventgrid" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid azurerm_digital_twins_endpoint_eventgrid}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/digitaltwinsendpointeventgrid"

digitaltwinsendpointeventgrid.NewDigitalTwinsEndpointEventgrid(scope Construct, id *string, config DigitalTwinsEndpointEventgridConfig) DigitalTwinsEndpointEventgrid
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig">DigitalTwinsEndpointEventgridConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig">DigitalTwinsEndpointEventgridConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetDeadLetterStorageSecret">ResetDeadLetterStorageSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.putTimeouts"></a>

```go
func PutTimeouts(value DigitalTwinsEndpointEventgridTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a>

---

##### `ResetDeadLetterStorageSecret` <a name="ResetDeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetDeadLetterStorageSecret"></a>

```go
func ResetDeadLetterStorageSecret()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DigitalTwinsEndpointEventgrid resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/digitaltwinsendpointeventgrid"

digitaltwinsendpointeventgrid.DigitalTwinsEndpointEventgrid_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/digitaltwinsendpointeventgrid"

digitaltwinsendpointeventgrid.DigitalTwinsEndpointEventgrid_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/digitaltwinsendpointeventgrid"

digitaltwinsendpointeventgrid.DigitalTwinsEndpointEventgrid_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/digitaltwinsendpointeventgrid"

digitaltwinsendpointeventgrid.DigitalTwinsEndpointEventgrid_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DigitalTwinsEndpointEventgrid resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DigitalTwinsEndpointEventgrid to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DigitalTwinsEndpointEventgrid that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DigitalTwinsEndpointEventgrid to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference">DigitalTwinsEndpointEventgridTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.deadLetterStorageSecretInput">DeadLetterStorageSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.digitalTwinsIdInput">DigitalTwinsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicEndpointInput">EventgridTopicEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicPrimaryAccessKeyInput">EventgridTopicPrimaryAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicSecondaryAccessKeyInput">EventgridTopicSecondaryAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.deadLetterStorageSecret">DeadLetterStorageSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.digitalTwinsId">DigitalTwinsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicEndpoint">EventgridTopicEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicPrimaryAccessKey">EventgridTopicPrimaryAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicSecondaryAccessKey">EventgridTopicSecondaryAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.timeouts"></a>

```go
func Timeouts() DigitalTwinsEndpointEventgridTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference">DigitalTwinsEndpointEventgridTimeoutsOutputReference</a>

---

##### `DeadLetterStorageSecretInput`<sup>Optional</sup> <a name="DeadLetterStorageSecretInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.deadLetterStorageSecretInput"></a>

```go
func DeadLetterStorageSecretInput() *string
```

- *Type:* *string

---

##### `DigitalTwinsIdInput`<sup>Optional</sup> <a name="DigitalTwinsIdInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.digitalTwinsIdInput"></a>

```go
func DigitalTwinsIdInput() *string
```

- *Type:* *string

---

##### `EventgridTopicEndpointInput`<sup>Optional</sup> <a name="EventgridTopicEndpointInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicEndpointInput"></a>

```go
func EventgridTopicEndpointInput() *string
```

- *Type:* *string

---

##### `EventgridTopicPrimaryAccessKeyInput`<sup>Optional</sup> <a name="EventgridTopicPrimaryAccessKeyInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicPrimaryAccessKeyInput"></a>

```go
func EventgridTopicPrimaryAccessKeyInput() *string
```

- *Type:* *string

---

##### `EventgridTopicSecondaryAccessKeyInput`<sup>Optional</sup> <a name="EventgridTopicSecondaryAccessKeyInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicSecondaryAccessKeyInput"></a>

```go
func EventgridTopicSecondaryAccessKeyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeadLetterStorageSecret`<sup>Required</sup> <a name="DeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.deadLetterStorageSecret"></a>

```go
func DeadLetterStorageSecret() *string
```

- *Type:* *string

---

##### `DigitalTwinsId`<sup>Required</sup> <a name="DigitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.digitalTwinsId"></a>

```go
func DigitalTwinsId() *string
```

- *Type:* *string

---

##### `EventgridTopicEndpoint`<sup>Required</sup> <a name="EventgridTopicEndpoint" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicEndpoint"></a>

```go
func EventgridTopicEndpoint() *string
```

- *Type:* *string

---

##### `EventgridTopicPrimaryAccessKey`<sup>Required</sup> <a name="EventgridTopicPrimaryAccessKey" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicPrimaryAccessKey"></a>

```go
func EventgridTopicPrimaryAccessKey() *string
```

- *Type:* *string

---

##### `EventgridTopicSecondaryAccessKey`<sup>Required</sup> <a name="EventgridTopicSecondaryAccessKey" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicSecondaryAccessKey"></a>

```go
func EventgridTopicSecondaryAccessKey() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DigitalTwinsEndpointEventgridConfig <a name="DigitalTwinsEndpointEventgridConfig" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/digitaltwinsendpointeventgrid"

&digitaltwinsendpointeventgrid.DigitalTwinsEndpointEventgridConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DigitalTwinsId: *string,
	EventgridTopicEndpoint: *string,
	EventgridTopicPrimaryAccessKey: *string,
	EventgridTopicSecondaryAccessKey: *string,
	Name: *string,
	DeadLetterStorageSecret: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.digitalTwinsId">DigitalTwinsId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#digital_twins_id DigitalTwinsEndpointEventgrid#digital_twins_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicEndpoint">EventgridTopicEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_endpoint DigitalTwinsEndpointEventgrid#eventgrid_topic_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicPrimaryAccessKey">EventgridTopicPrimaryAccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_primary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_primary_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicSecondaryAccessKey">EventgridTopicSecondaryAccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_secondary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_secondary_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#name DigitalTwinsEndpointEventgrid#name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.deadLetterStorageSecret">DeadLetterStorageSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#dead_letter_storage_secret DigitalTwinsEndpointEventgrid#dead_letter_storage_secret}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#id DigitalTwinsEndpointEventgrid#id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DigitalTwinsId`<sup>Required</sup> <a name="DigitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.digitalTwinsId"></a>

```go
DigitalTwinsId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#digital_twins_id DigitalTwinsEndpointEventgrid#digital_twins_id}.

---

##### `EventgridTopicEndpoint`<sup>Required</sup> <a name="EventgridTopicEndpoint" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicEndpoint"></a>

```go
EventgridTopicEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_endpoint DigitalTwinsEndpointEventgrid#eventgrid_topic_endpoint}.

---

##### `EventgridTopicPrimaryAccessKey`<sup>Required</sup> <a name="EventgridTopicPrimaryAccessKey" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicPrimaryAccessKey"></a>

```go
EventgridTopicPrimaryAccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_primary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_primary_access_key}.

---

##### `EventgridTopicSecondaryAccessKey`<sup>Required</sup> <a name="EventgridTopicSecondaryAccessKey" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicSecondaryAccessKey"></a>

```go
EventgridTopicSecondaryAccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_secondary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_secondary_access_key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#name DigitalTwinsEndpointEventgrid#name}.

---

##### `DeadLetterStorageSecret`<sup>Optional</sup> <a name="DeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.deadLetterStorageSecret"></a>

```go
DeadLetterStorageSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#dead_letter_storage_secret DigitalTwinsEndpointEventgrid#dead_letter_storage_secret}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#id DigitalTwinsEndpointEventgrid#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.timeouts"></a>

```go
Timeouts DigitalTwinsEndpointEventgridTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#timeouts DigitalTwinsEndpointEventgrid#timeouts}

---

### DigitalTwinsEndpointEventgridTimeouts <a name="DigitalTwinsEndpointEventgridTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/digitaltwinsendpointeventgrid"

&digitaltwinsendpointeventgrid.DigitalTwinsEndpointEventgridTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#create DigitalTwinsEndpointEventgrid#create}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#delete DigitalTwinsEndpointEventgrid#delete}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#read DigitalTwinsEndpointEventgrid#read}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#update DigitalTwinsEndpointEventgrid#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#create DigitalTwinsEndpointEventgrid#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#delete DigitalTwinsEndpointEventgrid#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#read DigitalTwinsEndpointEventgrid#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/digital_twins_endpoint_eventgrid#update DigitalTwinsEndpointEventgrid#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DigitalTwinsEndpointEventgridTimeoutsOutputReference <a name="DigitalTwinsEndpointEventgridTimeoutsOutputReference" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/digitaltwinsendpointeventgrid"

digitaltwinsendpointeventgrid.NewDigitalTwinsEndpointEventgridTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DigitalTwinsEndpointEventgridTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



