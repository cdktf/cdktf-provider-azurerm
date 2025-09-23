# `eventgridPartnerConfiguration` Submodule <a name="`eventgridPartnerConfiguration` Submodule" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridPartnerConfiguration <a name="EventgridPartnerConfiguration" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration azurerm_eventgrid_partner_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnerconfiguration"

eventgridpartnerconfiguration.NewEventgridPartnerConfiguration(scope Construct, id *string, config EventgridPartnerConfigurationConfig) EventgridPartnerConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig">EventgridPartnerConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig">EventgridPartnerConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putPartnerAuthorization">PutPartnerAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetDefaultMaximumExpirationTimeInDays">ResetDefaultMaximumExpirationTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetPartnerAuthorization">ResetPartnerAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPartnerAuthorization` <a name="PutPartnerAuthorization" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putPartnerAuthorization"></a>

```go
func PutPartnerAuthorization(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putPartnerAuthorization.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value EventgridPartnerConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a>

---

##### `ResetDefaultMaximumExpirationTimeInDays` <a name="ResetDefaultMaximumExpirationTimeInDays" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetDefaultMaximumExpirationTimeInDays"></a>

```go
func ResetDefaultMaximumExpirationTimeInDays()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetPartnerAuthorization` <a name="ResetPartnerAuthorization" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetPartnerAuthorization"></a>

```go
func ResetPartnerAuthorization()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventgridPartnerConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnerconfiguration"

eventgridpartnerconfiguration.EventgridPartnerConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnerconfiguration"

eventgridpartnerconfiguration.EventgridPartnerConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnerconfiguration"

eventgridpartnerconfiguration.EventgridPartnerConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnerconfiguration"

eventgridpartnerconfiguration.EventgridPartnerConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EventgridPartnerConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EventgridPartnerConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EventgridPartnerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EventgridPartnerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.partnerAuthorization">PartnerAuthorization</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList">EventgridPartnerConfigurationPartnerAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference">EventgridPartnerConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.defaultMaximumExpirationTimeInDaysInput">DefaultMaximumExpirationTimeInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.partnerAuthorizationInput">PartnerAuthorizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.defaultMaximumExpirationTimeInDays">DefaultMaximumExpirationTimeInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PartnerAuthorization`<sup>Required</sup> <a name="PartnerAuthorization" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.partnerAuthorization"></a>

```go
func PartnerAuthorization() EventgridPartnerConfigurationPartnerAuthorizationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList">EventgridPartnerConfigurationPartnerAuthorizationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.timeouts"></a>

```go
func Timeouts() EventgridPartnerConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference">EventgridPartnerConfigurationTimeoutsOutputReference</a>

---

##### `DefaultMaximumExpirationTimeInDaysInput`<sup>Optional</sup> <a name="DefaultMaximumExpirationTimeInDaysInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.defaultMaximumExpirationTimeInDaysInput"></a>

```go
func DefaultMaximumExpirationTimeInDaysInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PartnerAuthorizationInput`<sup>Optional</sup> <a name="PartnerAuthorizationInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.partnerAuthorizationInput"></a>

```go
func PartnerAuthorizationInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultMaximumExpirationTimeInDays`<sup>Required</sup> <a name="DefaultMaximumExpirationTimeInDays" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.defaultMaximumExpirationTimeInDays"></a>

```go
func DefaultMaximumExpirationTimeInDays() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridPartnerConfigurationConfig <a name="EventgridPartnerConfigurationConfig" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnerconfiguration"

&eventgridpartnerconfiguration.EventgridPartnerConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ResourceGroupName: *string,
	DefaultMaximumExpirationTimeInDays: *f64,
	Id: *string,
	PartnerAuthorization: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#resource_group_name EventgridPartnerConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.defaultMaximumExpirationTimeInDays">DefaultMaximumExpirationTimeInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#default_maximum_expiration_time_in_days EventgridPartnerConfiguration#default_maximum_expiration_time_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#id EventgridPartnerConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.partnerAuthorization">PartnerAuthorization</a></code> | <code>interface{}</code> | partner_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#tags EventgridPartnerConfiguration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#resource_group_name EventgridPartnerConfiguration#resource_group_name}.

---

##### `DefaultMaximumExpirationTimeInDays`<sup>Optional</sup> <a name="DefaultMaximumExpirationTimeInDays" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.defaultMaximumExpirationTimeInDays"></a>

```go
DefaultMaximumExpirationTimeInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#default_maximum_expiration_time_in_days EventgridPartnerConfiguration#default_maximum_expiration_time_in_days}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#id EventgridPartnerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartnerAuthorization`<sup>Optional</sup> <a name="PartnerAuthorization" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.partnerAuthorization"></a>

```go
PartnerAuthorization interface{}
```

- *Type:* interface{}

partner_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#partner_authorization EventgridPartnerConfiguration#partner_authorization}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#tags EventgridPartnerConfiguration#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.timeouts"></a>

```go
Timeouts EventgridPartnerConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#timeouts EventgridPartnerConfiguration#timeouts}

---

### EventgridPartnerConfigurationPartnerAuthorization <a name="EventgridPartnerConfigurationPartnerAuthorization" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnerconfiguration"

&eventgridpartnerconfiguration.EventgridPartnerConfigurationPartnerAuthorization {
	PartnerName: *string,
	PartnerRegistrationId: *string,
	AuthorizationExpirationTimeInUtc: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.partnerName">PartnerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#partner_name EventgridPartnerConfiguration#partner_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.partnerRegistrationId">PartnerRegistrationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#partner_registration_id EventgridPartnerConfiguration#partner_registration_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.authorizationExpirationTimeInUtc">AuthorizationExpirationTimeInUtc</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#authorization_expiration_time_in_utc EventgridPartnerConfiguration#authorization_expiration_time_in_utc}. |

---

##### `PartnerName`<sup>Required</sup> <a name="PartnerName" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.partnerName"></a>

```go
PartnerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#partner_name EventgridPartnerConfiguration#partner_name}.

---

##### `PartnerRegistrationId`<sup>Required</sup> <a name="PartnerRegistrationId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.partnerRegistrationId"></a>

```go
PartnerRegistrationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#partner_registration_id EventgridPartnerConfiguration#partner_registration_id}.

---

##### `AuthorizationExpirationTimeInUtc`<sup>Optional</sup> <a name="AuthorizationExpirationTimeInUtc" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.authorizationExpirationTimeInUtc"></a>

```go
AuthorizationExpirationTimeInUtc *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#authorization_expiration_time_in_utc EventgridPartnerConfiguration#authorization_expiration_time_in_utc}.

---

### EventgridPartnerConfigurationTimeouts <a name="EventgridPartnerConfigurationTimeouts" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnerconfiguration"

&eventgridpartnerconfiguration.EventgridPartnerConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#create EventgridPartnerConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#delete EventgridPartnerConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#read EventgridPartnerConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#update EventgridPartnerConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#create EventgridPartnerConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#delete EventgridPartnerConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#read EventgridPartnerConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/eventgrid_partner_configuration#update EventgridPartnerConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridPartnerConfigurationPartnerAuthorizationList <a name="EventgridPartnerConfigurationPartnerAuthorizationList" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnerconfiguration"

eventgridpartnerconfiguration.NewEventgridPartnerConfigurationPartnerAuthorizationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridPartnerConfigurationPartnerAuthorizationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.get"></a>

```go
func Get(index *f64) EventgridPartnerConfigurationPartnerAuthorizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridPartnerConfigurationPartnerAuthorizationOutputReference <a name="EventgridPartnerConfigurationPartnerAuthorizationOutputReference" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnerconfiguration"

eventgridpartnerconfiguration.NewEventgridPartnerConfigurationPartnerAuthorizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridPartnerConfigurationPartnerAuthorizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.resetAuthorizationExpirationTimeInUtc">ResetAuthorizationExpirationTimeInUtc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationExpirationTimeInUtc` <a name="ResetAuthorizationExpirationTimeInUtc" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.resetAuthorizationExpirationTimeInUtc"></a>

```go
func ResetAuthorizationExpirationTimeInUtc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.authorizationExpirationTimeInUtcInput">AuthorizationExpirationTimeInUtcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerNameInput">PartnerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerRegistrationIdInput">PartnerRegistrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.authorizationExpirationTimeInUtc">AuthorizationExpirationTimeInUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerName">PartnerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerRegistrationId">PartnerRegistrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationExpirationTimeInUtcInput`<sup>Optional</sup> <a name="AuthorizationExpirationTimeInUtcInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.authorizationExpirationTimeInUtcInput"></a>

```go
func AuthorizationExpirationTimeInUtcInput() *string
```

- *Type:* *string

---

##### `PartnerNameInput`<sup>Optional</sup> <a name="PartnerNameInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerNameInput"></a>

```go
func PartnerNameInput() *string
```

- *Type:* *string

---

##### `PartnerRegistrationIdInput`<sup>Optional</sup> <a name="PartnerRegistrationIdInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerRegistrationIdInput"></a>

```go
func PartnerRegistrationIdInput() *string
```

- *Type:* *string

---

##### `AuthorizationExpirationTimeInUtc`<sup>Required</sup> <a name="AuthorizationExpirationTimeInUtc" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.authorizationExpirationTimeInUtc"></a>

```go
func AuthorizationExpirationTimeInUtc() *string
```

- *Type:* *string

---

##### `PartnerName`<sup>Required</sup> <a name="PartnerName" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerName"></a>

```go
func PartnerName() *string
```

- *Type:* *string

---

##### `PartnerRegistrationId`<sup>Required</sup> <a name="PartnerRegistrationId" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerRegistrationId"></a>

```go
func PartnerRegistrationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridPartnerConfigurationTimeoutsOutputReference <a name="EventgridPartnerConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/eventgridpartnerconfiguration"

eventgridpartnerconfiguration.NewEventgridPartnerConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventgridPartnerConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



