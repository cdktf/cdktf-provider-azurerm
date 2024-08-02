# `datadogMonitorSsoConfiguration` Submodule <a name="`datadogMonitorSsoConfiguration` Submodule" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatadogMonitorSsoConfiguration <a name="DatadogMonitorSsoConfiguration" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration azurerm_datadog_monitor_sso_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datadogmonitorssoconfiguration"

datadogmonitorssoconfiguration.NewDatadogMonitorSsoConfiguration(scope Construct, id *string, config DatadogMonitorSsoConfigurationConfig) DatadogMonitorSsoConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig">DatadogMonitorSsoConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig">DatadogMonitorSsoConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value DatadogMonitorSsoConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts">DatadogMonitorSsoConfigurationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.resetName"></a>

```go
func ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatadogMonitorSsoConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datadogmonitorssoconfiguration"

datadogmonitorssoconfiguration.DatadogMonitorSsoConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datadogmonitorssoconfiguration"

datadogmonitorssoconfiguration.DatadogMonitorSsoConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datadogmonitorssoconfiguration"

datadogmonitorssoconfiguration.DatadogMonitorSsoConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datadogmonitorssoconfiguration"

datadogmonitorssoconfiguration.DatadogMonitorSsoConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatadogMonitorSsoConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatadogMonitorSsoConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatadogMonitorSsoConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatadogMonitorSsoConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.loginUrl">LoginUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference">DatadogMonitorSsoConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.datadogMonitorIdInput">DatadogMonitorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.enterpriseApplicationIdInput">EnterpriseApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.singleSignOnEnabledInput">SingleSignOnEnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.datadogMonitorId">DatadogMonitorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.enterpriseApplicationId">EnterpriseApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.singleSignOnEnabled">SingleSignOnEnabled</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LoginUrl`<sup>Required</sup> <a name="LoginUrl" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.loginUrl"></a>

```go
func LoginUrl() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.timeouts"></a>

```go
func Timeouts() DatadogMonitorSsoConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference">DatadogMonitorSsoConfigurationTimeoutsOutputReference</a>

---

##### `DatadogMonitorIdInput`<sup>Optional</sup> <a name="DatadogMonitorIdInput" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.datadogMonitorIdInput"></a>

```go
func DatadogMonitorIdInput() *string
```

- *Type:* *string

---

##### `EnterpriseApplicationIdInput`<sup>Optional</sup> <a name="EnterpriseApplicationIdInput" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.enterpriseApplicationIdInput"></a>

```go
func EnterpriseApplicationIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SingleSignOnEnabledInput`<sup>Optional</sup> <a name="SingleSignOnEnabledInput" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.singleSignOnEnabledInput"></a>

```go
func SingleSignOnEnabledInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DatadogMonitorId`<sup>Required</sup> <a name="DatadogMonitorId" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.datadogMonitorId"></a>

```go
func DatadogMonitorId() *string
```

- *Type:* *string

---

##### `EnterpriseApplicationId`<sup>Required</sup> <a name="EnterpriseApplicationId" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.enterpriseApplicationId"></a>

```go
func EnterpriseApplicationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SingleSignOnEnabled`<sup>Required</sup> <a name="SingleSignOnEnabled" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.singleSignOnEnabled"></a>

```go
func SingleSignOnEnabled() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatadogMonitorSsoConfigurationConfig <a name="DatadogMonitorSsoConfigurationConfig" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datadogmonitorssoconfiguration"

&datadogmonitorssoconfiguration.DatadogMonitorSsoConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatadogMonitorId: *string,
	EnterpriseApplicationId: *string,
	SingleSignOnEnabled: *string,
	Id: *string,
	Name: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.datadogMonitorId">DatadogMonitorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#datadog_monitor_id DatadogMonitorSsoConfiguration#datadog_monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.enterpriseApplicationId">EnterpriseApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#enterprise_application_id DatadogMonitorSsoConfiguration#enterprise_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.singleSignOnEnabled">SingleSignOnEnabled</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#single_sign_on_enabled DatadogMonitorSsoConfiguration#single_sign_on_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#id DatadogMonitorSsoConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#name DatadogMonitorSsoConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts">DatadogMonitorSsoConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatadogMonitorId`<sup>Required</sup> <a name="DatadogMonitorId" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.datadogMonitorId"></a>

```go
DatadogMonitorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#datadog_monitor_id DatadogMonitorSsoConfiguration#datadog_monitor_id}.

---

##### `EnterpriseApplicationId`<sup>Required</sup> <a name="EnterpriseApplicationId" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.enterpriseApplicationId"></a>

```go
EnterpriseApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#enterprise_application_id DatadogMonitorSsoConfiguration#enterprise_application_id}.

---

##### `SingleSignOnEnabled`<sup>Required</sup> <a name="SingleSignOnEnabled" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.singleSignOnEnabled"></a>

```go
SingleSignOnEnabled *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#single_sign_on_enabled DatadogMonitorSsoConfiguration#single_sign_on_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#id DatadogMonitorSsoConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#name DatadogMonitorSsoConfiguration#name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.timeouts"></a>

```go
Timeouts DatadogMonitorSsoConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts">DatadogMonitorSsoConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#timeouts DatadogMonitorSsoConfiguration#timeouts}

---

### DatadogMonitorSsoConfigurationTimeouts <a name="DatadogMonitorSsoConfigurationTimeouts" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datadogmonitorssoconfiguration"

&datadogmonitorssoconfiguration.DatadogMonitorSsoConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#create DatadogMonitorSsoConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#delete DatadogMonitorSsoConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#read DatadogMonitorSsoConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#update DatadogMonitorSsoConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#create DatadogMonitorSsoConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#delete DatadogMonitorSsoConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#read DatadogMonitorSsoConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/datadog_monitor_sso_configuration#update DatadogMonitorSsoConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatadogMonitorSsoConfigurationTimeoutsOutputReference <a name="DatadogMonitorSsoConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datadogmonitorssoconfiguration"

datadogmonitorssoconfiguration.NewDatadogMonitorSsoConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatadogMonitorSsoConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



