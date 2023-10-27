# `azurerm_eventhub_namespace_disaster_recovery_config`

Refer to the Terraform Registory for docs: [`azurerm_eventhub_namespace_disaster_recovery_config`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config).

# `eventhubNamespaceDisasterRecoveryConfig` Submodule <a name="`eventhubNamespaceDisasterRecoveryConfig` Submodule" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventhubNamespaceDisasterRecoveryConfig <a name="EventhubNamespaceDisasterRecoveryConfig" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config azurerm_eventhub_namespace_disaster_recovery_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/eventhubnamespacedisasterrecoveryconfig"

eventhubnamespacedisasterrecoveryconfig.NewEventhubNamespaceDisasterRecoveryConfig(scope Construct, id *string, config EventhubNamespaceDisasterRecoveryConfigConfig) EventhubNamespaceDisasterRecoveryConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig">EventhubNamespaceDisasterRecoveryConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig">EventhubNamespaceDisasterRecoveryConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.putTimeouts"></a>

```go
func PutTimeouts(value EventhubNamespaceDisasterRecoveryConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts">EventhubNamespaceDisasterRecoveryConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventhubNamespaceDisasterRecoveryConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/eventhubnamespacedisasterrecoveryconfig"

eventhubnamespacedisasterrecoveryconfig.EventhubNamespaceDisasterRecoveryConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/eventhubnamespacedisasterrecoveryconfig"

eventhubnamespacedisasterrecoveryconfig.EventhubNamespaceDisasterRecoveryConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/eventhubnamespacedisasterrecoveryconfig"

eventhubnamespacedisasterrecoveryconfig.EventhubNamespaceDisasterRecoveryConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/eventhubnamespacedisasterrecoveryconfig"

eventhubnamespacedisasterrecoveryconfig.EventhubNamespaceDisasterRecoveryConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EventhubNamespaceDisasterRecoveryConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EventhubNamespaceDisasterRecoveryConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EventhubNamespaceDisasterRecoveryConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EventhubNamespaceDisasterRecoveryConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference">EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.partnerNamespaceIdInput">PartnerNamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.partnerNamespaceId">PartnerNamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.timeouts"></a>

```go
func Timeouts() EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference">EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.namespaceNameInput"></a>

```go
func NamespaceNameInput() *string
```

- *Type:* *string

---

##### `PartnerNamespaceIdInput`<sup>Optional</sup> <a name="PartnerNamespaceIdInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.partnerNamespaceIdInput"></a>

```go
func PartnerNamespaceIdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `PartnerNamespaceId`<sup>Required</sup> <a name="PartnerNamespaceId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.partnerNamespaceId"></a>

```go
func PartnerNamespaceId() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EventhubNamespaceDisasterRecoveryConfigConfig <a name="EventhubNamespaceDisasterRecoveryConfigConfig" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/eventhubnamespacedisasterrecoveryconfig"

&eventhubnamespacedisasterrecoveryconfig.EventhubNamespaceDisasterRecoveryConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	NamespaceName: *string,
	PartnerNamespaceId: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#name EventhubNamespaceDisasterRecoveryConfig#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#namespace_name EventhubNamespaceDisasterRecoveryConfig#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.partnerNamespaceId">PartnerNamespaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#partner_namespace_id EventhubNamespaceDisasterRecoveryConfig#partner_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#resource_group_name EventhubNamespaceDisasterRecoveryConfig#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#id EventhubNamespaceDisasterRecoveryConfig#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts">EventhubNamespaceDisasterRecoveryConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#name EventhubNamespaceDisasterRecoveryConfig#name}.

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.namespaceName"></a>

```go
NamespaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#namespace_name EventhubNamespaceDisasterRecoveryConfig#namespace_name}.

---

##### `PartnerNamespaceId`<sup>Required</sup> <a name="PartnerNamespaceId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.partnerNamespaceId"></a>

```go
PartnerNamespaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#partner_namespace_id EventhubNamespaceDisasterRecoveryConfig#partner_namespace_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#resource_group_name EventhubNamespaceDisasterRecoveryConfig#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#id EventhubNamespaceDisasterRecoveryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.timeouts"></a>

```go
Timeouts EventhubNamespaceDisasterRecoveryConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts">EventhubNamespaceDisasterRecoveryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#timeouts EventhubNamespaceDisasterRecoveryConfig#timeouts}

---

### EventhubNamespaceDisasterRecoveryConfigTimeouts <a name="EventhubNamespaceDisasterRecoveryConfigTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/eventhubnamespacedisasterrecoveryconfig"

&eventhubnamespacedisasterrecoveryconfig.EventhubNamespaceDisasterRecoveryConfigTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#create EventhubNamespaceDisasterRecoveryConfig#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#delete EventhubNamespaceDisasterRecoveryConfig#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#read EventhubNamespaceDisasterRecoveryConfig#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#update EventhubNamespaceDisasterRecoveryConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#create EventhubNamespaceDisasterRecoveryConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#delete EventhubNamespaceDisasterRecoveryConfig#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#read EventhubNamespaceDisasterRecoveryConfig#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/eventhub_namespace_disaster_recovery_config#update EventhubNamespaceDisasterRecoveryConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference <a name="EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/eventhubnamespacedisasterrecoveryconfig"

eventhubnamespacedisasterrecoveryconfig.NewEventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



