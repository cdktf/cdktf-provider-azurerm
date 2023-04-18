# `azurerm_logic_app_integration_account_batch_configuration`

Refer to the Terraform Registory for docs: [`azurerm_logic_app_integration_account_batch_configuration`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration).

# `logicAppIntegrationAccountBatchConfiguration` Submodule <a name="`logicAppIntegrationAccountBatchConfiguration` Submodule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppIntegrationAccountBatchConfiguration <a name="LogicAppIntegrationAccountBatchConfiguration" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration azurerm_logic_app_integration_account_batch_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/logicappintegrationaccountbatchconfiguration"

logicappintegrationaccountbatchconfiguration.NewLogicAppIntegrationAccountBatchConfiguration(scope Construct, id *string, config LogicAppIntegrationAccountBatchConfigurationConfig) LogicAppIntegrationAccountBatchConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig">LogicAppIntegrationAccountBatchConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig">LogicAppIntegrationAccountBatchConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putReleaseCriteria">PutReleaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutReleaseCriteria` <a name="PutReleaseCriteria" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putReleaseCriteria"></a>

```go
func PutReleaseCriteria(value LogicAppIntegrationAccountBatchConfigurationReleaseCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putReleaseCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria">LogicAppIntegrationAccountBatchConfigurationReleaseCriteria</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value LogicAppIntegrationAccountBatchConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts">LogicAppIntegrationAccountBatchConfigurationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/logicappintegrationaccountbatchconfiguration"

logicappintegrationaccountbatchconfiguration.LogicAppIntegrationAccountBatchConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/logicappintegrationaccountbatchconfiguration"

logicappintegrationaccountbatchconfiguration.LogicAppIntegrationAccountBatchConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/logicappintegrationaccountbatchconfiguration"

logicappintegrationaccountbatchconfiguration.LogicAppIntegrationAccountBatchConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.releaseCriteria">ReleaseCriteria</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference">LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.batchGroupNameInput">BatchGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.integrationAccountNameInput">IntegrationAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.releaseCriteriaInput">ReleaseCriteriaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria">LogicAppIntegrationAccountBatchConfigurationReleaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.batchGroupName">BatchGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.integrationAccountName">IntegrationAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ReleaseCriteria`<sup>Required</sup> <a name="ReleaseCriteria" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.releaseCriteria"></a>

```go
func ReleaseCriteria() LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.timeouts"></a>

```go
func Timeouts() LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference">LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference</a>

---

##### `BatchGroupNameInput`<sup>Optional</sup> <a name="BatchGroupNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.batchGroupNameInput"></a>

```go
func BatchGroupNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationAccountNameInput`<sup>Optional</sup> <a name="IntegrationAccountNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.integrationAccountNameInput"></a>

```go
func IntegrationAccountNameInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReleaseCriteriaInput`<sup>Optional</sup> <a name="ReleaseCriteriaInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.releaseCriteriaInput"></a>

```go
func ReleaseCriteriaInput() LogicAppIntegrationAccountBatchConfigurationReleaseCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria">LogicAppIntegrationAccountBatchConfigurationReleaseCriteria</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BatchGroupName`<sup>Required</sup> <a name="BatchGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.batchGroupName"></a>

```go
func BatchGroupName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationAccountName`<sup>Required</sup> <a name="IntegrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.integrationAccountName"></a>

```go
func IntegrationAccountName() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppIntegrationAccountBatchConfigurationConfig <a name="LogicAppIntegrationAccountBatchConfigurationConfig" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/logicappintegrationaccountbatchconfiguration"

&logicappintegrationaccountbatchconfiguration.LogicAppIntegrationAccountBatchConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BatchGroupName: *string,
	IntegrationAccountName: *string,
	Name: *string,
	ReleaseCriteria: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria,
	ResourceGroupName: *string,
	Id: *string,
	Metadata: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.batchGroupName">BatchGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#batch_group_name LogicAppIntegrationAccountBatchConfiguration#batch_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.integrationAccountName">IntegrationAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#integration_account_name LogicAppIntegrationAccountBatchConfiguration#integration_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#name LogicAppIntegrationAccountBatchConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.releaseCriteria">ReleaseCriteria</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria">LogicAppIntegrationAccountBatchConfigurationReleaseCriteria</a></code> | release_criteria block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#resource_group_name LogicAppIntegrationAccountBatchConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#id LogicAppIntegrationAccountBatchConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#metadata LogicAppIntegrationAccountBatchConfiguration#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts">LogicAppIntegrationAccountBatchConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BatchGroupName`<sup>Required</sup> <a name="BatchGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.batchGroupName"></a>

```go
BatchGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#batch_group_name LogicAppIntegrationAccountBatchConfiguration#batch_group_name}.

---

##### `IntegrationAccountName`<sup>Required</sup> <a name="IntegrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.integrationAccountName"></a>

```go
IntegrationAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#integration_account_name LogicAppIntegrationAccountBatchConfiguration#integration_account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#name LogicAppIntegrationAccountBatchConfiguration#name}.

---

##### `ReleaseCriteria`<sup>Required</sup> <a name="ReleaseCriteria" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.releaseCriteria"></a>

```go
ReleaseCriteria LogicAppIntegrationAccountBatchConfigurationReleaseCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria">LogicAppIntegrationAccountBatchConfigurationReleaseCriteria</a>

release_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#release_criteria LogicAppIntegrationAccountBatchConfiguration#release_criteria}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#resource_group_name LogicAppIntegrationAccountBatchConfiguration#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#id LogicAppIntegrationAccountBatchConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#metadata LogicAppIntegrationAccountBatchConfiguration#metadata}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.timeouts"></a>

```go
Timeouts LogicAppIntegrationAccountBatchConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts">LogicAppIntegrationAccountBatchConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#timeouts LogicAppIntegrationAccountBatchConfiguration#timeouts}

---

### LogicAppIntegrationAccountBatchConfigurationReleaseCriteria <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteria" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/logicappintegrationaccountbatchconfiguration"

&logicappintegrationaccountbatchconfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria {
	BatchSize: *f64,
	MessageCount: *f64,
	Recurrence: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria.property.batchSize">BatchSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#batch_size LogicAppIntegrationAccountBatchConfiguration#batch_size}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria.property.messageCount">MessageCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#message_count LogicAppIntegrationAccountBatchConfiguration#message_count}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence</a></code> | recurrence block. |

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria.property.batchSize"></a>

```go
BatchSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#batch_size LogicAppIntegrationAccountBatchConfiguration#batch_size}.

---

##### `MessageCount`<sup>Optional</sup> <a name="MessageCount" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria.property.messageCount"></a>

```go
MessageCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#message_count LogicAppIntegrationAccountBatchConfiguration#message_count}.

---

##### `Recurrence`<sup>Optional</sup> <a name="Recurrence" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria.property.recurrence"></a>

```go
Recurrence LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#recurrence LogicAppIntegrationAccountBatchConfiguration#recurrence}

---

### LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/logicappintegrationaccountbatchconfiguration"

&logicappintegrationaccountbatchconfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence {
	Frequency: *string,
	Interval: *f64,
	EndTime: *string,
	Schedule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule,
	StartTime: *string,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.frequency">Frequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#frequency LogicAppIntegrationAccountBatchConfiguration#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.interval">Interval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#interval LogicAppIntegrationAccountBatchConfiguration#interval}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.endTime">EndTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#end_time LogicAppIntegrationAccountBatchConfiguration#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#start_time LogicAppIntegrationAccountBatchConfiguration#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#time_zone LogicAppIntegrationAccountBatchConfiguration#time_zone}. |

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.frequency"></a>

```go
Frequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#frequency LogicAppIntegrationAccountBatchConfiguration#frequency}.

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#interval LogicAppIntegrationAccountBatchConfiguration#interval}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#end_time LogicAppIntegrationAccountBatchConfiguration#end_time}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.schedule"></a>

```go
Schedule LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#schedule LogicAppIntegrationAccountBatchConfiguration#schedule}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#start_time LogicAppIntegrationAccountBatchConfiguration#start_time}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#time_zone LogicAppIntegrationAccountBatchConfiguration#time_zone}.

---

### LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/logicappintegrationaccountbatchconfiguration"

&logicappintegrationaccountbatchconfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule {
	Hours: *[]*f64,
	Minutes: *[]*f64,
	MonthDays: *[]*f64,
	Monthly: interface{},
	WeekDays: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.hours">Hours</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#hours LogicAppIntegrationAccountBatchConfiguration#hours}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.minutes">Minutes</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#minutes LogicAppIntegrationAccountBatchConfiguration#minutes}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.monthDays">MonthDays</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#month_days LogicAppIntegrationAccountBatchConfiguration#month_days}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.monthly">Monthly</a></code> | <code>interface{}</code> | monthly block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.weekDays">WeekDays</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#week_days LogicAppIntegrationAccountBatchConfiguration#week_days}. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.hours"></a>

```go
Hours *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#hours LogicAppIntegrationAccountBatchConfiguration#hours}.

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.minutes"></a>

```go
Minutes *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#minutes LogicAppIntegrationAccountBatchConfiguration#minutes}.

---

##### `MonthDays`<sup>Optional</sup> <a name="MonthDays" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.monthDays"></a>

```go
MonthDays *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#month_days LogicAppIntegrationAccountBatchConfiguration#month_days}.

---

##### `Monthly`<sup>Optional</sup> <a name="Monthly" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.monthly"></a>

```go
Monthly interface{}
```

- *Type:* interface{}

monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#monthly LogicAppIntegrationAccountBatchConfiguration#monthly}

---

##### `WeekDays`<sup>Optional</sup> <a name="WeekDays" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.weekDays"></a>

```go
WeekDays *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#week_days LogicAppIntegrationAccountBatchConfiguration#week_days}.

---

### LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/logicappintegrationaccountbatchconfiguration"

&logicappintegrationaccountbatchconfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly {
	Week: *f64,
	Weekday: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly.property.week">Week</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#week LogicAppIntegrationAccountBatchConfiguration#week}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly.property.weekday">Weekday</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#weekday LogicAppIntegrationAccountBatchConfiguration#weekday}. |

---

##### `Week`<sup>Required</sup> <a name="Week" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly.property.week"></a>

```go
Week *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#week LogicAppIntegrationAccountBatchConfiguration#week}.

---

##### `Weekday`<sup>Required</sup> <a name="Weekday" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly.property.weekday"></a>

```go
Weekday *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#weekday LogicAppIntegrationAccountBatchConfiguration#weekday}.

---

### LogicAppIntegrationAccountBatchConfigurationTimeouts <a name="LogicAppIntegrationAccountBatchConfigurationTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/logicappintegrationaccountbatchconfiguration"

&logicappintegrationaccountbatchconfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#create LogicAppIntegrationAccountBatchConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#delete LogicAppIntegrationAccountBatchConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#read LogicAppIntegrationAccountBatchConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#update LogicAppIntegrationAccountBatchConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#create LogicAppIntegrationAccountBatchConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#delete LogicAppIntegrationAccountBatchConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#read LogicAppIntegrationAccountBatchConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_batch_configuration#update LogicAppIntegrationAccountBatchConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/logicappintegrationaccountbatchconfiguration"

logicappintegrationaccountbatchconfiguration.NewLogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.putRecurrence">PutRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resetBatchSize">ResetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resetMessageCount">ResetMessageCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resetRecurrence">ResetRecurrence</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecurrence` <a name="PutRecurrence" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.putRecurrence"></a>

```go
func PutRecurrence(value LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence</a>

---

##### `ResetBatchSize` <a name="ResetBatchSize" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resetBatchSize"></a>

```go
func ResetBatchSize()
```

##### `ResetMessageCount` <a name="ResetMessageCount" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resetMessageCount"></a>

```go
func ResetMessageCount()
```

##### `ResetRecurrence` <a name="ResetRecurrence" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resetRecurrence"></a>

```go
func ResetRecurrence()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.messageCountInput">MessageCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.batchSize">BatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.messageCount">MessageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria">LogicAppIntegrationAccountBatchConfigurationReleaseCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.recurrence"></a>

```go
func Recurrence() LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference</a>

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.batchSizeInput"></a>

```go
func BatchSizeInput() *f64
```

- *Type:* *f64

---

##### `MessageCountInput`<sup>Optional</sup> <a name="MessageCountInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.messageCountInput"></a>

```go
func MessageCountInput() *f64
```

- *Type:* *f64

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.recurrenceInput"></a>

```go
func RecurrenceInput() LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence</a>

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.batchSize"></a>

```go
func BatchSize() *f64
```

- *Type:* *f64

---

##### `MessageCount`<sup>Required</sup> <a name="MessageCount" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.messageCount"></a>

```go
func MessageCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() LogicAppIntegrationAccountBatchConfigurationReleaseCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria">LogicAppIntegrationAccountBatchConfigurationReleaseCriteria</a>

---


### LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/logicappintegrationaccountbatchconfiguration"

logicappintegrationaccountbatchconfiguration.NewLogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.putSchedule"></a>

```go
func PutSchedule(value LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule</a>

---

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.schedule"></a>

```go
func Schedule() LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference</a>

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.frequencyInput"></a>

```go
func FrequencyInput() *string
```

- *Type:* *string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.internalValue"></a>

```go
func InternalValue() LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence</a>

---


### LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/logicappintegrationaccountbatchconfiguration"

logicappintegrationaccountbatchconfiguration.NewLogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.get"></a>

```go
func Get(index *f64) LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/logicappintegrationaccountbatchconfiguration"

logicappintegrationaccountbatchconfiguration.NewLogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.weekdayInput">WeekdayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.weekInput">WeekInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.week">Week</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.weekday">Weekday</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WeekdayInput`<sup>Optional</sup> <a name="WeekdayInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.weekdayInput"></a>

```go
func WeekdayInput() *string
```

- *Type:* *string

---

##### `WeekInput`<sup>Optional</sup> <a name="WeekInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.weekInput"></a>

```go
func WeekInput() *f64
```

- *Type:* *f64

---

##### `Week`<sup>Required</sup> <a name="Week" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.week"></a>

```go
func Week() *f64
```

- *Type:* *f64

---

##### `Weekday`<sup>Required</sup> <a name="Weekday" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.weekday"></a>

```go
func Weekday() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/logicappintegrationaccountbatchconfiguration"

logicappintegrationaccountbatchconfiguration.NewLogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.putMonthly">PutMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetMonthDays">ResetMonthDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetMonthly">ResetMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetWeekDays">ResetWeekDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonthly` <a name="PutMonthly" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.putMonthly"></a>

```go
func PutMonthly(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.putMonthly.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetHours"></a>

```go
func ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetMinutes"></a>

```go
func ResetMinutes()
```

##### `ResetMonthDays` <a name="ResetMonthDays" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetMonthDays"></a>

```go
func ResetMonthDays()
```

##### `ResetMonthly` <a name="ResetMonthly" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetMonthly"></a>

```go
func ResetMonthly()
```

##### `ResetWeekDays` <a name="ResetWeekDays" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetWeekDays"></a>

```go
func ResetWeekDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.monthly">Monthly</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.hoursInput">HoursInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.monthDaysInput">MonthDaysInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.monthlyInput">MonthlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.weekDaysInput">WeekDaysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.hours">Hours</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.minutes">Minutes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.monthDays">MonthDays</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.weekDays">WeekDays</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Monthly`<sup>Required</sup> <a name="Monthly" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.monthly"></a>

```go
func Monthly() LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList</a>

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.hoursInput"></a>

```go
func HoursInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `MonthDaysInput`<sup>Optional</sup> <a name="MonthDaysInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.monthDaysInput"></a>

```go
func MonthDaysInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `MonthlyInput`<sup>Optional</sup> <a name="MonthlyInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.monthlyInput"></a>

```go
func MonthlyInput() interface{}
```

- *Type:* interface{}

---

##### `WeekDaysInput`<sup>Optional</sup> <a name="WeekDaysInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.weekDaysInput"></a>

```go
func WeekDaysInput() *[]*string
```

- *Type:* *[]*string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.hours"></a>

```go
func Hours() *[]*f64
```

- *Type:* *[]*f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.minutes"></a>

```go
func Minutes() *[]*f64
```

- *Type:* *[]*f64

---

##### `MonthDays`<sup>Required</sup> <a name="MonthDays" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.monthDays"></a>

```go
func MonthDays() *[]*f64
```

- *Type:* *[]*f64

---

##### `WeekDays`<sup>Required</sup> <a name="WeekDays" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.weekDays"></a>

```go
func WeekDays() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule</a>

---


### LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference <a name="LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/logicappintegrationaccountbatchconfiguration"

logicappintegrationaccountbatchconfiguration.NewLogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



