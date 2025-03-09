# `dataAzurermServicebusQueueAuthorizationRule` Submodule <a name="`dataAzurermServicebusQueueAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermServicebusQueueAuthorizationRule <a name="DataAzurermServicebusQueueAuthorizationRule" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule azurerm_servicebus_queue_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermservicebusqueueauthorizationrule"

dataazurermservicebusqueueauthorizationrule.NewDataAzurermServicebusQueueAuthorizationRule(scope Construct, id *string, config DataAzurermServicebusQueueAuthorizationRuleConfig) DataAzurermServicebusQueueAuthorizationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig">DataAzurermServicebusQueueAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig">DataAzurermServicebusQueueAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetNamespaceName">ResetNamespaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetQueueId">ResetQueueId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetQueueName">ResetQueueName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetResourceGroupName">ResetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermServicebusQueueAuthorizationRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespaceName` <a name="ResetNamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetNamespaceName"></a>

```go
func ResetNamespaceName()
```

##### `ResetQueueId` <a name="ResetQueueId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetQueueId"></a>

```go
func ResetQueueId()
```

##### `ResetQueueName` <a name="ResetQueueName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetQueueName"></a>

```go
func ResetQueueName()
```

##### `ResetResourceGroupName` <a name="ResetResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetResourceGroupName"></a>

```go
func ResetResourceGroupName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermServicebusQueueAuthorizationRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermservicebusqueueauthorizationrule"

dataazurermservicebusqueueauthorizationrule.DataAzurermServicebusQueueAuthorizationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermservicebusqueueauthorizationrule"

dataazurermservicebusqueueauthorizationrule.DataAzurermServicebusQueueAuthorizationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermservicebusqueueauthorizationrule"

dataazurermservicebusqueueauthorizationrule.DataAzurermServicebusQueueAuthorizationRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermservicebusqueueauthorizationrule"

dataazurermservicebusqueueauthorizationrule.DataAzurermServicebusQueueAuthorizationRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermServicebusQueueAuthorizationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermServicebusQueueAuthorizationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermServicebusQueueAuthorizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermServicebusQueueAuthorizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.listen">Listen</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.manage">Manage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryConnectionStringAlias">PrimaryConnectionStringAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryKey">PrimaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryConnectionStringAlias">SecondaryConnectionStringAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryKey">SecondaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.send">Send</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference">DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueIdInput">QueueIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueNameInput">QueueNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueId">QueueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueName">QueueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Listen`<sup>Required</sup> <a name="Listen" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.listen"></a>

```go
func Listen() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Manage`<sup>Required</sup> <a name="Manage" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.manage"></a>

```go
func Manage() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryConnectionString"></a>

```go
func PrimaryConnectionString() *string
```

- *Type:* *string

---

##### `PrimaryConnectionStringAlias`<sup>Required</sup> <a name="PrimaryConnectionStringAlias" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryConnectionStringAlias"></a>

```go
func PrimaryConnectionStringAlias() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryKey"></a>

```go
func PrimaryKey() *string
```

- *Type:* *string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryConnectionString"></a>

```go
func SecondaryConnectionString() *string
```

- *Type:* *string

---

##### `SecondaryConnectionStringAlias`<sup>Required</sup> <a name="SecondaryConnectionStringAlias" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryConnectionStringAlias"></a>

```go
func SecondaryConnectionStringAlias() *string
```

- *Type:* *string

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryKey"></a>

```go
func SecondaryKey() *string
```

- *Type:* *string

---

##### `Send`<sup>Required</sup> <a name="Send" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.send"></a>

```go
func Send() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.timeouts"></a>

```go
func Timeouts() DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference">DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.namespaceNameInput"></a>

```go
func NamespaceNameInput() *string
```

- *Type:* *string

---

##### `QueueIdInput`<sup>Optional</sup> <a name="QueueIdInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueIdInput"></a>

```go
func QueueIdInput() *string
```

- *Type:* *string

---

##### `QueueNameInput`<sup>Optional</sup> <a name="QueueNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueNameInput"></a>

```go
func QueueNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `QueueId`<sup>Required</sup> <a name="QueueId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueId"></a>

```go
func QueueId() *string
```

- *Type:* *string

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueName"></a>

```go
func QueueName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermServicebusQueueAuthorizationRuleConfig <a name="DataAzurermServicebusQueueAuthorizationRuleConfig" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermservicebusqueueauthorizationrule"

&dataazurermservicebusqueueauthorizationrule.DataAzurermServicebusQueueAuthorizationRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	NamespaceName: *string,
	QueueId: *string,
	QueueName: *string,
	ResourceGroupName: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule#name DataAzurermServicebusQueueAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule#id DataAzurermServicebusQueueAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule#namespace_name DataAzurermServicebusQueueAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.queueId">QueueId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule#queue_id DataAzurermServicebusQueueAuthorizationRule#queue_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.queueName">QueueName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule#queue_name DataAzurermServicebusQueueAuthorizationRule#queue_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule#resource_group_name DataAzurermServicebusQueueAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule#name DataAzurermServicebusQueueAuthorizationRule#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule#id DataAzurermServicebusQueueAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NamespaceName`<sup>Optional</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.namespaceName"></a>

```go
NamespaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule#namespace_name DataAzurermServicebusQueueAuthorizationRule#namespace_name}.

---

##### `QueueId`<sup>Optional</sup> <a name="QueueId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.queueId"></a>

```go
QueueId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule#queue_id DataAzurermServicebusQueueAuthorizationRule#queue_id}.

---

##### `QueueName`<sup>Optional</sup> <a name="QueueName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.queueName"></a>

```go
QueueName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule#queue_name DataAzurermServicebusQueueAuthorizationRule#queue_name}.

---

##### `ResourceGroupName`<sup>Optional</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule#resource_group_name DataAzurermServicebusQueueAuthorizationRule#resource_group_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.timeouts"></a>

```go
Timeouts DataAzurermServicebusQueueAuthorizationRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule#timeouts DataAzurermServicebusQueueAuthorizationRule#timeouts}

---

### DataAzurermServicebusQueueAuthorizationRuleTimeouts <a name="DataAzurermServicebusQueueAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermservicebusqueueauthorizationrule"

&dataazurermservicebusqueueauthorizationrule.DataAzurermServicebusQueueAuthorizationRuleTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule#read DataAzurermServicebusQueueAuthorizationRule#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/servicebus_queue_authorization_rule#read DataAzurermServicebusQueueAuthorizationRule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference <a name="DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermservicebusqueueauthorizationrule"

dataazurermservicebusqueueauthorizationrule.NewDataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



