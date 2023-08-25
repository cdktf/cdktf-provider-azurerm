# `data_azurerm_sentinel_alert_rule_anomaly`

Refer to the Terraform Registory for docs: [`data_azurerm_sentinel_alert_rule_anomaly`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/sentinel_alert_rule_anomaly).

# `dataAzurermSentinelAlertRuleAnomaly` Submodule <a name="`dataAzurermSentinelAlertRuleAnomaly` Submodule" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSentinelAlertRuleAnomaly <a name="DataAzurermSentinelAlertRuleAnomaly" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/sentinel_alert_rule_anomaly azurerm_sentinel_alert_rule_anomaly}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

dataazurermsentinelalertruleanomaly.NewDataAzurermSentinelAlertRuleAnomaly(scope Construct, id *string, config DataAzurermSentinelAlertRuleAnomalyConfig) DataAzurermSentinelAlertRuleAnomaly
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig">DataAzurermSentinelAlertRuleAnomalyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig">DataAzurermSentinelAlertRuleAnomalyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermSentinelAlertRuleAnomalyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts">DataAzurermSentinelAlertRuleAnomalyTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetName"></a>

```go
func ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

dataazurermsentinelalertruleanomaly.DataAzurermSentinelAlertRuleAnomaly_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

dataazurermsentinelalertruleanomaly.DataAzurermSentinelAlertRuleAnomaly_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

dataazurermsentinelalertruleanomaly.DataAzurermSentinelAlertRuleAnomaly_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.anomalySettingsVersion">AnomalySettingsVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.anomalyVersion">AnomalyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.multiSelectObservation">MultiSelectObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList">DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.prioritizedExcludeObservation">PrioritizedExcludeObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList">DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.requiredDataConnector">RequiredDataConnector</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList">DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.settingsDefinitionId">SettingsDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.singleSelectObservation">SingleSelectObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList">DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.tactics">Tactics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.techniques">Techniques</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.thresholdObservation">ThresholdObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList">DataAzurermSentinelAlertRuleAnomalyThresholdObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference">DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AnomalySettingsVersion`<sup>Required</sup> <a name="AnomalySettingsVersion" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.anomalySettingsVersion"></a>

```go
func AnomalySettingsVersion() *f64
```

- *Type:* *f64

---

##### `AnomalyVersion`<sup>Required</sup> <a name="AnomalyVersion" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.anomalyVersion"></a>

```go
func AnomalyVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `MultiSelectObservation`<sup>Required</sup> <a name="MultiSelectObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.multiSelectObservation"></a>

```go
func MultiSelectObservation() DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList">DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList</a>

---

##### `PrioritizedExcludeObservation`<sup>Required</sup> <a name="PrioritizedExcludeObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.prioritizedExcludeObservation"></a>

```go
func PrioritizedExcludeObservation() DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList">DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList</a>

---

##### `RequiredDataConnector`<sup>Required</sup> <a name="RequiredDataConnector" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.requiredDataConnector"></a>

```go
func RequiredDataConnector() DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList">DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList</a>

---

##### `SettingsDefinitionId`<sup>Required</sup> <a name="SettingsDefinitionId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.settingsDefinitionId"></a>

```go
func SettingsDefinitionId() *string
```

- *Type:* *string

---

##### `SingleSelectObservation`<sup>Required</sup> <a name="SingleSelectObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.singleSelectObservation"></a>

```go
func SingleSelectObservation() DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList">DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList</a>

---

##### `Tactics`<sup>Required</sup> <a name="Tactics" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.tactics"></a>

```go
func Tactics() *[]*string
```

- *Type:* *[]*string

---

##### `Techniques`<sup>Required</sup> <a name="Techniques" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.techniques"></a>

```go
func Techniques() *[]*string
```

- *Type:* *[]*string

---

##### `ThresholdObservation`<sup>Required</sup> <a name="ThresholdObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.thresholdObservation"></a>

```go
func ThresholdObservation() DataAzurermSentinelAlertRuleAnomalyThresholdObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList">DataAzurermSentinelAlertRuleAnomalyThresholdObservationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.timeouts"></a>

```go
func Timeouts() DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference">DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSentinelAlertRuleAnomalyConfig <a name="DataAzurermSentinelAlertRuleAnomalyConfig" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

&dataazurermsentinelalertruleanomaly.DataAzurermSentinelAlertRuleAnomalyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LogAnalyticsWorkspaceId: *string,
	DisplayName: *string,
	Id: *string,
	Name: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/sentinel_alert_rule_anomaly#log_analytics_workspace_id DataAzurermSentinelAlertRuleAnomaly#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/sentinel_alert_rule_anomaly#display_name DataAzurermSentinelAlertRuleAnomaly#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/sentinel_alert_rule_anomaly#id DataAzurermSentinelAlertRuleAnomaly#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/sentinel_alert_rule_anomaly#name DataAzurermSentinelAlertRuleAnomaly#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts">DataAzurermSentinelAlertRuleAnomalyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/sentinel_alert_rule_anomaly#log_analytics_workspace_id DataAzurermSentinelAlertRuleAnomaly#log_analytics_workspace_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/sentinel_alert_rule_anomaly#display_name DataAzurermSentinelAlertRuleAnomaly#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/sentinel_alert_rule_anomaly#id DataAzurermSentinelAlertRuleAnomaly#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/sentinel_alert_rule_anomaly#name DataAzurermSentinelAlertRuleAnomaly#name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.timeouts"></a>

```go
Timeouts DataAzurermSentinelAlertRuleAnomalyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts">DataAzurermSentinelAlertRuleAnomalyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/sentinel_alert_rule_anomaly#timeouts DataAzurermSentinelAlertRuleAnomaly#timeouts}

---

### DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation <a name="DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

&dataazurermsentinelalertruleanomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation {

}
```


### DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation <a name="DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

&dataazurermsentinelalertruleanomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation {

}
```


### DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector <a name="DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

&dataazurermsentinelalertruleanomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector {

}
```


### DataAzurermSentinelAlertRuleAnomalySingleSelectObservation <a name="DataAzurermSentinelAlertRuleAnomalySingleSelectObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

&dataazurermsentinelalertruleanomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservation {

}
```


### DataAzurermSentinelAlertRuleAnomalyThresholdObservation <a name="DataAzurermSentinelAlertRuleAnomalyThresholdObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

&dataazurermsentinelalertruleanomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservation {

}
```


### DataAzurermSentinelAlertRuleAnomalyTimeouts <a name="DataAzurermSentinelAlertRuleAnomalyTimeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

&dataazurermsentinelalertruleanomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/sentinel_alert_rule_anomaly#read DataAzurermSentinelAlertRuleAnomaly#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/sentinel_alert_rule_anomaly#read DataAzurermSentinelAlertRuleAnomaly#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList <a name="DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

dataazurermsentinelalertruleanomaly.NewDataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.get"></a>

```go
func Get(index *f64) DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference <a name="DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

dataazurermsentinelalertruleanomaly.NewDataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.supportedValues">SupportedValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation">DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SupportedValues`<sup>Required</sup> <a name="SupportedValues" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.supportedValues"></a>

```go
func SupportedValues() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation">DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation</a>

---


### DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList <a name="DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

dataazurermsentinelalertruleanomaly.NewDataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.get"></a>

```go
func Get(index *f64) DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference <a name="DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

dataazurermsentinelalertruleanomaly.NewDataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.exclude">Exclude</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.prioritize">Prioritize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation">DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.exclude"></a>

```go
func Exclude() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Prioritize`<sup>Required</sup> <a name="Prioritize" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.prioritize"></a>

```go
func Prioritize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation">DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation</a>

---


### DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList <a name="DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

dataazurermsentinelalertruleanomaly.NewDataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.get"></a>

```go
func Get(index *f64) DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference <a name="DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

dataazurermsentinelalertruleanomaly.NewDataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.connectorId">ConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.dataTypes">DataTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector">DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.connectorId"></a>

```go
func ConnectorId() *string
```

- *Type:* *string

---

##### `DataTypes`<sup>Required</sup> <a name="DataTypes" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.dataTypes"></a>

```go
func DataTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector">DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector</a>

---


### DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList <a name="DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

dataazurermsentinelalertruleanomaly.NewDataAzurermSentinelAlertRuleAnomalySingleSelectObservationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.get"></a>

```go
func Get(index *f64) DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference <a name="DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

dataazurermsentinelalertruleanomaly.NewDataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.supportedValues">SupportedValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservation">DataAzurermSentinelAlertRuleAnomalySingleSelectObservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SupportedValues`<sup>Required</sup> <a name="SupportedValues" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.supportedValues"></a>

```go
func SupportedValues() *[]*string
```

- *Type:* *[]*string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermSentinelAlertRuleAnomalySingleSelectObservation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservation">DataAzurermSentinelAlertRuleAnomalySingleSelectObservation</a>

---


### DataAzurermSentinelAlertRuleAnomalyThresholdObservationList <a name="DataAzurermSentinelAlertRuleAnomalyThresholdObservationList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

dataazurermsentinelalertruleanomaly.NewDataAzurermSentinelAlertRuleAnomalyThresholdObservationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermSentinelAlertRuleAnomalyThresholdObservationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.get"></a>

```go
func Get(index *f64) DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference <a name="DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

dataazurermsentinelalertruleanomaly.NewDataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.max">Max</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.min">Min</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservation">DataAzurermSentinelAlertRuleAnomalyThresholdObservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.max"></a>

```go
func Max() *string
```

- *Type:* *string

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.min"></a>

```go
func Min() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermSentinelAlertRuleAnomalyThresholdObservation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservation">DataAzurermSentinelAlertRuleAnomalyThresholdObservation</a>

---


### DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference <a name="DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermsentinelalertruleanomaly"

dataazurermsentinelalertruleanomaly.NewDataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



