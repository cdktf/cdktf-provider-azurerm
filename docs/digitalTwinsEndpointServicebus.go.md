# `digitalTwinsEndpointServicebus` Submodule <a name="`digitalTwinsEndpointServicebus` Submodule" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitalTwinsEndpointServicebus <a name="DigitalTwinsEndpointServicebus" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus azurerm_digital_twins_endpoint_servicebus}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/digitaltwinsendpointservicebus"

digitaltwinsendpointservicebus.NewDigitalTwinsEndpointServicebus(scope Construct, id *string, config DigitalTwinsEndpointServicebusConfig) DigitalTwinsEndpointServicebus
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig">DigitalTwinsEndpointServicebusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig">DigitalTwinsEndpointServicebusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetDeadLetterStorageSecret">ResetDeadLetterStorageSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.putTimeouts"></a>

```go
func PutTimeouts(value DigitalTwinsEndpointServicebusTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a>

---

##### `ResetDeadLetterStorageSecret` <a name="ResetDeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetDeadLetterStorageSecret"></a>

```go
func ResetDeadLetterStorageSecret()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DigitalTwinsEndpointServicebus resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/digitaltwinsendpointservicebus"

digitaltwinsendpointservicebus.DigitalTwinsEndpointServicebus_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/digitaltwinsendpointservicebus"

digitaltwinsendpointservicebus.DigitalTwinsEndpointServicebus_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/digitaltwinsendpointservicebus"

digitaltwinsendpointservicebus.DigitalTwinsEndpointServicebus_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/digitaltwinsendpointservicebus"

digitaltwinsendpointservicebus.DigitalTwinsEndpointServicebus_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DigitalTwinsEndpointServicebus resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DigitalTwinsEndpointServicebus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DigitalTwinsEndpointServicebus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DigitalTwinsEndpointServicebus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference">DigitalTwinsEndpointServicebusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.deadLetterStorageSecretInput">DeadLetterStorageSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.digitalTwinsIdInput">DigitalTwinsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusPrimaryConnectionStringInput">ServicebusPrimaryConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusSecondaryConnectionStringInput">ServicebusSecondaryConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.deadLetterStorageSecret">DeadLetterStorageSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.digitalTwinsId">DigitalTwinsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusPrimaryConnectionString">ServicebusPrimaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusSecondaryConnectionString">ServicebusSecondaryConnectionString</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.timeouts"></a>

```go
func Timeouts() DigitalTwinsEndpointServicebusTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference">DigitalTwinsEndpointServicebusTimeoutsOutputReference</a>

---

##### `DeadLetterStorageSecretInput`<sup>Optional</sup> <a name="DeadLetterStorageSecretInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.deadLetterStorageSecretInput"></a>

```go
func DeadLetterStorageSecretInput() *string
```

- *Type:* *string

---

##### `DigitalTwinsIdInput`<sup>Optional</sup> <a name="DigitalTwinsIdInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.digitalTwinsIdInput"></a>

```go
func DigitalTwinsIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServicebusPrimaryConnectionStringInput`<sup>Optional</sup> <a name="ServicebusPrimaryConnectionStringInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusPrimaryConnectionStringInput"></a>

```go
func ServicebusPrimaryConnectionStringInput() *string
```

- *Type:* *string

---

##### `ServicebusSecondaryConnectionStringInput`<sup>Optional</sup> <a name="ServicebusSecondaryConnectionStringInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusSecondaryConnectionStringInput"></a>

```go
func ServicebusSecondaryConnectionStringInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeadLetterStorageSecret`<sup>Required</sup> <a name="DeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.deadLetterStorageSecret"></a>

```go
func DeadLetterStorageSecret() *string
```

- *Type:* *string

---

##### `DigitalTwinsId`<sup>Required</sup> <a name="DigitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.digitalTwinsId"></a>

```go
func DigitalTwinsId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServicebusPrimaryConnectionString`<sup>Required</sup> <a name="ServicebusPrimaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusPrimaryConnectionString"></a>

```go
func ServicebusPrimaryConnectionString() *string
```

- *Type:* *string

---

##### `ServicebusSecondaryConnectionString`<sup>Required</sup> <a name="ServicebusSecondaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusSecondaryConnectionString"></a>

```go
func ServicebusSecondaryConnectionString() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DigitalTwinsEndpointServicebusConfig <a name="DigitalTwinsEndpointServicebusConfig" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/digitaltwinsendpointservicebus"

&digitaltwinsendpointservicebus.DigitalTwinsEndpointServicebusConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DigitalTwinsId: *string,
	Name: *string,
	ServicebusPrimaryConnectionString: *string,
	ServicebusSecondaryConnectionString: *string,
	DeadLetterStorageSecret: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.digitalTwinsId">DigitalTwinsId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#digital_twins_id DigitalTwinsEndpointServicebus#digital_twins_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#name DigitalTwinsEndpointServicebus#name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.servicebusPrimaryConnectionString">ServicebusPrimaryConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_primary_connection_string DigitalTwinsEndpointServicebus#servicebus_primary_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.servicebusSecondaryConnectionString">ServicebusSecondaryConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_secondary_connection_string DigitalTwinsEndpointServicebus#servicebus_secondary_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.deadLetterStorageSecret">DeadLetterStorageSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#dead_letter_storage_secret DigitalTwinsEndpointServicebus#dead_letter_storage_secret}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#id DigitalTwinsEndpointServicebus#id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DigitalTwinsId`<sup>Required</sup> <a name="DigitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.digitalTwinsId"></a>

```go
DigitalTwinsId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#digital_twins_id DigitalTwinsEndpointServicebus#digital_twins_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#name DigitalTwinsEndpointServicebus#name}.

---

##### `ServicebusPrimaryConnectionString`<sup>Required</sup> <a name="ServicebusPrimaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.servicebusPrimaryConnectionString"></a>

```go
ServicebusPrimaryConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_primary_connection_string DigitalTwinsEndpointServicebus#servicebus_primary_connection_string}.

---

##### `ServicebusSecondaryConnectionString`<sup>Required</sup> <a name="ServicebusSecondaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.servicebusSecondaryConnectionString"></a>

```go
ServicebusSecondaryConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_secondary_connection_string DigitalTwinsEndpointServicebus#servicebus_secondary_connection_string}.

---

##### `DeadLetterStorageSecret`<sup>Optional</sup> <a name="DeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.deadLetterStorageSecret"></a>

```go
DeadLetterStorageSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#dead_letter_storage_secret DigitalTwinsEndpointServicebus#dead_letter_storage_secret}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#id DigitalTwinsEndpointServicebus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.timeouts"></a>

```go
Timeouts DigitalTwinsEndpointServicebusTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#timeouts DigitalTwinsEndpointServicebus#timeouts}

---

### DigitalTwinsEndpointServicebusTimeouts <a name="DigitalTwinsEndpointServicebusTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/digitaltwinsendpointservicebus"

&digitaltwinsendpointservicebus.DigitalTwinsEndpointServicebusTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#create DigitalTwinsEndpointServicebus#create}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#delete DigitalTwinsEndpointServicebus#delete}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#read DigitalTwinsEndpointServicebus#read}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#update DigitalTwinsEndpointServicebus#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#create DigitalTwinsEndpointServicebus#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#delete DigitalTwinsEndpointServicebus#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#read DigitalTwinsEndpointServicebus#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/digital_twins_endpoint_servicebus#update DigitalTwinsEndpointServicebus#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DigitalTwinsEndpointServicebusTimeoutsOutputReference <a name="DigitalTwinsEndpointServicebusTimeoutsOutputReference" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/digitaltwinsendpointservicebus"

digitaltwinsendpointservicebus.NewDigitalTwinsEndpointServicebusTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DigitalTwinsEndpointServicebusTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



