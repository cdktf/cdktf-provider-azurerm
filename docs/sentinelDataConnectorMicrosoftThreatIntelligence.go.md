# `azurerm_sentinel_data_connector_microsoft_threat_intelligence`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_data_connector_microsoft_threat_intelligence`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence).

# `sentinelDataConnectorMicrosoftThreatIntelligence` Submodule <a name="`sentinelDataConnectorMicrosoftThreatIntelligence` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorMicrosoftThreatIntelligence <a name="SentinelDataConnectorMicrosoftThreatIntelligence" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence azurerm_sentinel_data_connector_microsoft_threat_intelligence}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentineldataconnectormicrosoftthreatintelligence"

sentineldataconnectormicrosoftthreatintelligence.NewSentinelDataConnectorMicrosoftThreatIntelligence(scope Construct, id *string, config SentinelDataConnectorMicrosoftThreatIntelligenceConfig) SentinelDataConnectorMicrosoftThreatIntelligence
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig">SentinelDataConnectorMicrosoftThreatIntelligenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig">SentinelDataConnectorMicrosoftThreatIntelligenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetBingSafetyPhishingUrlLookbackDate">ResetBingSafetyPhishingUrlLookbackDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetMicrosoftEmergingThreatFeedLookbackDate">ResetMicrosoftEmergingThreatFeedLookbackDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.putTimeouts"></a>

```go
func PutTimeouts(value SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a>

---

##### `ResetBingSafetyPhishingUrlLookbackDate` <a name="ResetBingSafetyPhishingUrlLookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetBingSafetyPhishingUrlLookbackDate"></a>

```go
func ResetBingSafetyPhishingUrlLookbackDate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetId"></a>

```go
func ResetId()
```

##### `ResetMicrosoftEmergingThreatFeedLookbackDate` <a name="ResetMicrosoftEmergingThreatFeedLookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetMicrosoftEmergingThreatFeedLookbackDate"></a>

```go
func ResetMicrosoftEmergingThreatFeedLookbackDate()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentineldataconnectormicrosoftthreatintelligence"

sentineldataconnectormicrosoftthreatintelligence.SentinelDataConnectorMicrosoftThreatIntelligence_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentineldataconnectormicrosoftthreatintelligence"

sentineldataconnectormicrosoftthreatintelligence.SentinelDataConnectorMicrosoftThreatIntelligence_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentineldataconnectormicrosoftthreatintelligence"

sentineldataconnectormicrosoftthreatintelligence.SentinelDataConnectorMicrosoftThreatIntelligence_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference">SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.bingSafetyPhishingUrlLookbackDateInput">BingSafetyPhishingUrlLookbackDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.microsoftEmergingThreatFeedLookbackDateInput">MicrosoftEmergingThreatFeedLookbackDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.bingSafetyPhishingUrlLookbackDate">BingSafetyPhishingUrlLookbackDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.microsoftEmergingThreatFeedLookbackDate">MicrosoftEmergingThreatFeedLookbackDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.timeouts"></a>

```go
func Timeouts() SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference">SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference</a>

---

##### `BingSafetyPhishingUrlLookbackDateInput`<sup>Optional</sup> <a name="BingSafetyPhishingUrlLookbackDateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.bingSafetyPhishingUrlLookbackDateInput"></a>

```go
func BingSafetyPhishingUrlLookbackDateInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `MicrosoftEmergingThreatFeedLookbackDateInput`<sup>Optional</sup> <a name="MicrosoftEmergingThreatFeedLookbackDateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.microsoftEmergingThreatFeedLookbackDateInput"></a>

```go
func MicrosoftEmergingThreatFeedLookbackDateInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BingSafetyPhishingUrlLookbackDate`<sup>Required</sup> <a name="BingSafetyPhishingUrlLookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.bingSafetyPhishingUrlLookbackDate"></a>

```go
func BingSafetyPhishingUrlLookbackDate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `MicrosoftEmergingThreatFeedLookbackDate`<sup>Required</sup> <a name="MicrosoftEmergingThreatFeedLookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.microsoftEmergingThreatFeedLookbackDate"></a>

```go
func MicrosoftEmergingThreatFeedLookbackDate() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorMicrosoftThreatIntelligenceConfig <a name="SentinelDataConnectorMicrosoftThreatIntelligenceConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentineldataconnectormicrosoftthreatintelligence"

&sentineldataconnectormicrosoftthreatintelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LogAnalyticsWorkspaceId: *string,
	Name: *string,
	BingSafetyPhishingUrlLookbackDate: *string,
	Id: *string,
	MicrosoftEmergingThreatFeedLookbackDate: *string,
	TenantId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatIntelligence#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#name SentinelDataConnectorMicrosoftThreatIntelligence#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.bingSafetyPhishingUrlLookbackDate">BingSafetyPhishingUrlLookbackDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#bing_safety_phishing_url_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#bing_safety_phishing_url_lookback_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#id SentinelDataConnectorMicrosoftThreatIntelligence#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.microsoftEmergingThreatFeedLookbackDate">MicrosoftEmergingThreatFeedLookbackDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#microsoft_emerging_threat_feed_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#microsoft_emerging_threat_feed_lookback_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#tenant_id SentinelDataConnectorMicrosoftThreatIntelligence#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatIntelligence#log_analytics_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#name SentinelDataConnectorMicrosoftThreatIntelligence#name}.

---

##### `BingSafetyPhishingUrlLookbackDate`<sup>Optional</sup> <a name="BingSafetyPhishingUrlLookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.bingSafetyPhishingUrlLookbackDate"></a>

```go
BingSafetyPhishingUrlLookbackDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#bing_safety_phishing_url_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#bing_safety_phishing_url_lookback_date}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#id SentinelDataConnectorMicrosoftThreatIntelligence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MicrosoftEmergingThreatFeedLookbackDate`<sup>Optional</sup> <a name="MicrosoftEmergingThreatFeedLookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.microsoftEmergingThreatFeedLookbackDate"></a>

```go
MicrosoftEmergingThreatFeedLookbackDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#microsoft_emerging_threat_feed_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#microsoft_emerging_threat_feed_lookback_date}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#tenant_id SentinelDataConnectorMicrosoftThreatIntelligence#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.timeouts"></a>

```go
Timeouts SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#timeouts SentinelDataConnectorMicrosoftThreatIntelligence#timeouts}

---

### SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts <a name="SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentineldataconnectormicrosoftthreatintelligence"

&sentineldataconnectormicrosoftthreatintelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#create SentinelDataConnectorMicrosoftThreatIntelligence#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#delete SentinelDataConnectorMicrosoftThreatIntelligence#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#read SentinelDataConnectorMicrosoftThreatIntelligence#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#create SentinelDataConnectorMicrosoftThreatIntelligence#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#delete SentinelDataConnectorMicrosoftThreatIntelligence#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#read SentinelDataConnectorMicrosoftThreatIntelligence#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference <a name="SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentineldataconnectormicrosoftthreatintelligence"

sentineldataconnectormicrosoftthreatintelligence.NewSentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



