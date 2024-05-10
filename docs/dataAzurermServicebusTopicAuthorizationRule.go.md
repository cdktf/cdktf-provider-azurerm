# `dataAzurermServicebusTopicAuthorizationRule` Submodule <a name="`dataAzurermServicebusTopicAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermServicebusTopicAuthorizationRule <a name="DataAzurermServicebusTopicAuthorizationRule" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule azurerm_servicebus_topic_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermservicebustopicauthorizationrule"

dataazurermservicebustopicauthorizationrule.NewDataAzurermServicebusTopicAuthorizationRule(scope Construct, id *string, config DataAzurermServicebusTopicAuthorizationRuleConfig) DataAzurermServicebusTopicAuthorizationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig">DataAzurermServicebusTopicAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig">DataAzurermServicebusTopicAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetNamespaceName">ResetNamespaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetQueueName">ResetQueueName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetResourceGroupName">ResetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetTopicId">ResetTopicId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetTopicName">ResetTopicName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermServicebusTopicAuthorizationRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts">DataAzurermServicebusTopicAuthorizationRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespaceName` <a name="ResetNamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetNamespaceName"></a>

```go
func ResetNamespaceName()
```

##### `ResetQueueName` <a name="ResetQueueName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetQueueName"></a>

```go
func ResetQueueName()
```

##### `ResetResourceGroupName` <a name="ResetResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetResourceGroupName"></a>

```go
func ResetResourceGroupName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTopicId` <a name="ResetTopicId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetTopicId"></a>

```go
func ResetTopicId()
```

##### `ResetTopicName` <a name="ResetTopicName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetTopicName"></a>

```go
func ResetTopicName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermServicebusTopicAuthorizationRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermservicebustopicauthorizationrule"

dataazurermservicebustopicauthorizationrule.DataAzurermServicebusTopicAuthorizationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermservicebustopicauthorizationrule"

dataazurermservicebustopicauthorizationrule.DataAzurermServicebusTopicAuthorizationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermservicebustopicauthorizationrule"

dataazurermservicebustopicauthorizationrule.DataAzurermServicebusTopicAuthorizationRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermservicebustopicauthorizationrule"

dataazurermservicebustopicauthorizationrule.DataAzurermServicebusTopicAuthorizationRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermServicebusTopicAuthorizationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermServicebusTopicAuthorizationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermServicebusTopicAuthorizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermServicebusTopicAuthorizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.listen">Listen</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.manage">Manage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.primaryConnectionStringAlias">PrimaryConnectionStringAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.primaryKey">PrimaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.secondaryConnectionStringAlias">SecondaryConnectionStringAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.secondaryKey">SecondaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.send">Send</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference">DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.queueNameInput">QueueNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.topicIdInput">TopicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.topicNameInput">TopicNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.queueName">QueueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.topicId">TopicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.topicName">TopicName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Listen`<sup>Required</sup> <a name="Listen" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.listen"></a>

```go
func Listen() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Manage`<sup>Required</sup> <a name="Manage" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.manage"></a>

```go
func Manage() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.primaryConnectionString"></a>

```go
func PrimaryConnectionString() *string
```

- *Type:* *string

---

##### `PrimaryConnectionStringAlias`<sup>Required</sup> <a name="PrimaryConnectionStringAlias" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.primaryConnectionStringAlias"></a>

```go
func PrimaryConnectionStringAlias() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.primaryKey"></a>

```go
func PrimaryKey() *string
```

- *Type:* *string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.secondaryConnectionString"></a>

```go
func SecondaryConnectionString() *string
```

- *Type:* *string

---

##### `SecondaryConnectionStringAlias`<sup>Required</sup> <a name="SecondaryConnectionStringAlias" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.secondaryConnectionStringAlias"></a>

```go
func SecondaryConnectionStringAlias() *string
```

- *Type:* *string

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.secondaryKey"></a>

```go
func SecondaryKey() *string
```

- *Type:* *string

---

##### `Send`<sup>Required</sup> <a name="Send" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.send"></a>

```go
func Send() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.timeouts"></a>

```go
func Timeouts() DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference">DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.namespaceNameInput"></a>

```go
func NamespaceNameInput() *string
```

- *Type:* *string

---

##### `QueueNameInput`<sup>Optional</sup> <a name="QueueNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.queueNameInput"></a>

```go
func QueueNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TopicIdInput`<sup>Optional</sup> <a name="TopicIdInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.topicIdInput"></a>

```go
func TopicIdInput() *string
```

- *Type:* *string

---

##### `TopicNameInput`<sup>Optional</sup> <a name="TopicNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.topicNameInput"></a>

```go
func TopicNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.queueName"></a>

```go
func QueueName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.topicId"></a>

```go
func TopicId() *string
```

- *Type:* *string

---

##### `TopicName`<sup>Required</sup> <a name="TopicName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.topicName"></a>

```go
func TopicName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermServicebusTopicAuthorizationRuleConfig <a name="DataAzurermServicebusTopicAuthorizationRuleConfig" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermservicebustopicauthorizationrule"

&dataazurermservicebustopicauthorizationrule.DataAzurermServicebusTopicAuthorizationRuleConfig {
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
	QueueName: *string,
	ResourceGroupName: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts,
	TopicId: *string,
	TopicName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#name DataAzurermServicebusTopicAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#id DataAzurermServicebusTopicAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#namespace_name DataAzurermServicebusTopicAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.queueName">QueueName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#queue_name DataAzurermServicebusTopicAuthorizationRule#queue_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#resource_group_name DataAzurermServicebusTopicAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts">DataAzurermServicebusTopicAuthorizationRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.topicId">TopicId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#topic_id DataAzurermServicebusTopicAuthorizationRule#topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.topicName">TopicName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#topic_name DataAzurermServicebusTopicAuthorizationRule#topic_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#name DataAzurermServicebusTopicAuthorizationRule#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#id DataAzurermServicebusTopicAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NamespaceName`<sup>Optional</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.namespaceName"></a>

```go
NamespaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#namespace_name DataAzurermServicebusTopicAuthorizationRule#namespace_name}.

---

##### `QueueName`<sup>Optional</sup> <a name="QueueName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.queueName"></a>

```go
QueueName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#queue_name DataAzurermServicebusTopicAuthorizationRule#queue_name}.

---

##### `ResourceGroupName`<sup>Optional</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#resource_group_name DataAzurermServicebusTopicAuthorizationRule#resource_group_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.timeouts"></a>

```go
Timeouts DataAzurermServicebusTopicAuthorizationRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts">DataAzurermServicebusTopicAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#timeouts DataAzurermServicebusTopicAuthorizationRule#timeouts}

---

##### `TopicId`<sup>Optional</sup> <a name="TopicId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.topicId"></a>

```go
TopicId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#topic_id DataAzurermServicebusTopicAuthorizationRule#topic_id}.

---

##### `TopicName`<sup>Optional</sup> <a name="TopicName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.topicName"></a>

```go
TopicName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#topic_name DataAzurermServicebusTopicAuthorizationRule#topic_name}.

---

### DataAzurermServicebusTopicAuthorizationRuleTimeouts <a name="DataAzurermServicebusTopicAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermservicebustopicauthorizationrule"

&dataazurermservicebustopicauthorizationrule.DataAzurermServicebusTopicAuthorizationRuleTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#read DataAzurermServicebusTopicAuthorizationRule#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/data-sources/servicebus_topic_authorization_rule#read DataAzurermServicebusTopicAuthorizationRule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference <a name="DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermservicebustopicauthorizationrule"

dataazurermservicebustopicauthorizationrule.NewDataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



