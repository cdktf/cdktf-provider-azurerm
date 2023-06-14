# `azurerm_sentinel_alert_rule_nrt`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_alert_rule_nrt`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt).

# `sentinelAlertRuleNrt` Submodule <a name="`sentinelAlertRuleNrt` Submodule" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAlertRuleNrt <a name="SentinelAlertRuleNrt" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt azurerm_sentinel_alert_rule_nrt}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.NewSentinelAlertRuleNrt(scope Construct, id *string, config SentinelAlertRuleNrtConfig) SentinelAlertRuleNrt
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig">SentinelAlertRuleNrtConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig">SentinelAlertRuleNrtConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putAlertDetailsOverride">PutAlertDetailsOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEntityMapping">PutEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEventGrouping">PutEventGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putIncident">PutIncident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putSentinelEntityMapping">PutSentinelEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertDetailsOverride">ResetAlertDetailsOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertRuleTemplateGuid">ResetAlertRuleTemplateGuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertRuleTemplateVersion">ResetAlertRuleTemplateVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetCustomDetails">ResetCustomDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetEntityMapping">ResetEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetEventGrouping">ResetEventGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetIncident">ResetIncident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSentinelEntityMapping">ResetSentinelEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSuppressionDuration">ResetSuppressionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSuppressionEnabled">ResetSuppressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTactics">ResetTactics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTechniques">ResetTechniques</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAlertDetailsOverride` <a name="PutAlertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putAlertDetailsOverride"></a>

```go
func PutAlertDetailsOverride(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putAlertDetailsOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEntityMapping` <a name="PutEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEntityMapping"></a>

```go
func PutEntityMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEntityMapping.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEventGrouping` <a name="PutEventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEventGrouping"></a>

```go
func PutEventGrouping(value SentinelAlertRuleNrtEventGrouping)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEventGrouping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a>

---

##### `PutIncident` <a name="PutIncident" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putIncident"></a>

```go
func PutIncident(value SentinelAlertRuleNrtIncident)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putIncident.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a>

---

##### `PutSentinelEntityMapping` <a name="PutSentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putSentinelEntityMapping"></a>

```go
func PutSentinelEntityMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putSentinelEntityMapping.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putTimeouts"></a>

```go
func PutTimeouts(value SentinelAlertRuleNrtTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a>

---

##### `ResetAlertDetailsOverride` <a name="ResetAlertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertDetailsOverride"></a>

```go
func ResetAlertDetailsOverride()
```

##### `ResetAlertRuleTemplateGuid` <a name="ResetAlertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertRuleTemplateGuid"></a>

```go
func ResetAlertRuleTemplateGuid()
```

##### `ResetAlertRuleTemplateVersion` <a name="ResetAlertRuleTemplateVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertRuleTemplateVersion"></a>

```go
func ResetAlertRuleTemplateVersion()
```

##### `ResetCustomDetails` <a name="ResetCustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetCustomDetails"></a>

```go
func ResetCustomDetails()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEntityMapping` <a name="ResetEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetEntityMapping"></a>

```go
func ResetEntityMapping()
```

##### `ResetEventGrouping` <a name="ResetEventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetEventGrouping"></a>

```go
func ResetEventGrouping()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetId"></a>

```go
func ResetId()
```

##### `ResetIncident` <a name="ResetIncident" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetIncident"></a>

```go
func ResetIncident()
```

##### `ResetSentinelEntityMapping` <a name="ResetSentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSentinelEntityMapping"></a>

```go
func ResetSentinelEntityMapping()
```

##### `ResetSuppressionDuration` <a name="ResetSuppressionDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSuppressionDuration"></a>

```go
func ResetSuppressionDuration()
```

##### `ResetSuppressionEnabled` <a name="ResetSuppressionEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSuppressionEnabled"></a>

```go
func ResetSuppressionEnabled()
```

##### `ResetTactics` <a name="ResetTactics" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTactics"></a>

```go
func ResetTactics()
```

##### `ResetTechniques` <a name="ResetTechniques" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTechniques"></a>

```go
func ResetTechniques()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.SentinelAlertRuleNrt_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.SentinelAlertRuleNrt_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.SentinelAlertRuleNrt_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertDetailsOverride">AlertDetailsOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList">SentinelAlertRuleNrtAlertDetailsOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.entityMapping">EntityMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList">SentinelAlertRuleNrtEntityMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.eventGrouping">EventGrouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference">SentinelAlertRuleNrtEventGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.incident">Incident</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference">SentinelAlertRuleNrtIncidentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.sentinelEntityMapping">SentinelEntityMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList">SentinelAlertRuleNrtSentinelEntityMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference">SentinelAlertRuleNrtTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertDetailsOverrideInput">AlertDetailsOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateGuidInput">AlertRuleTemplateGuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateVersionInput">AlertRuleTemplateVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.customDetailsInput">CustomDetailsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.entityMappingInput">EntityMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.eventGroupingInput">EventGroupingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.incidentInput">IncidentInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.sentinelEntityMappingInput">SentinelEntityMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionDurationInput">SuppressionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionEnabledInput">SuppressionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tacticsInput">TacticsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.techniquesInput">TechniquesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateGuid">AlertRuleTemplateGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateVersion">AlertRuleTemplateVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.customDetails">CustomDetails</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionDuration">SuppressionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionEnabled">SuppressionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tactics">Tactics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.techniques">Techniques</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlertDetailsOverride`<sup>Required</sup> <a name="AlertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertDetailsOverride"></a>

```go
func AlertDetailsOverride() SentinelAlertRuleNrtAlertDetailsOverrideList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList">SentinelAlertRuleNrtAlertDetailsOverrideList</a>

---

##### `EntityMapping`<sup>Required</sup> <a name="EntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.entityMapping"></a>

```go
func EntityMapping() SentinelAlertRuleNrtEntityMappingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList">SentinelAlertRuleNrtEntityMappingList</a>

---

##### `EventGrouping`<sup>Required</sup> <a name="EventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.eventGrouping"></a>

```go
func EventGrouping() SentinelAlertRuleNrtEventGroupingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference">SentinelAlertRuleNrtEventGroupingOutputReference</a>

---

##### `Incident`<sup>Required</sup> <a name="Incident" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.incident"></a>

```go
func Incident() SentinelAlertRuleNrtIncidentOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference">SentinelAlertRuleNrtIncidentOutputReference</a>

---

##### `SentinelEntityMapping`<sup>Required</sup> <a name="SentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.sentinelEntityMapping"></a>

```go
func SentinelEntityMapping() SentinelAlertRuleNrtSentinelEntityMappingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList">SentinelAlertRuleNrtSentinelEntityMappingList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.timeouts"></a>

```go
func Timeouts() SentinelAlertRuleNrtTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference">SentinelAlertRuleNrtTimeoutsOutputReference</a>

---

##### `AlertDetailsOverrideInput`<sup>Optional</sup> <a name="AlertDetailsOverrideInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertDetailsOverrideInput"></a>

```go
func AlertDetailsOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `AlertRuleTemplateGuidInput`<sup>Optional</sup> <a name="AlertRuleTemplateGuidInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateGuidInput"></a>

```go
func AlertRuleTemplateGuidInput() *string
```

- *Type:* *string

---

##### `AlertRuleTemplateVersionInput`<sup>Optional</sup> <a name="AlertRuleTemplateVersionInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateVersionInput"></a>

```go
func AlertRuleTemplateVersionInput() *string
```

- *Type:* *string

---

##### `CustomDetailsInput`<sup>Optional</sup> <a name="CustomDetailsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.customDetailsInput"></a>

```go
func CustomDetailsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EntityMappingInput`<sup>Optional</sup> <a name="EntityMappingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.entityMappingInput"></a>

```go
func EntityMappingInput() interface{}
```

- *Type:* interface{}

---

##### `EventGroupingInput`<sup>Optional</sup> <a name="EventGroupingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.eventGroupingInput"></a>

```go
func EventGroupingInput() SentinelAlertRuleNrtEventGrouping
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncidentInput`<sup>Optional</sup> <a name="IncidentInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.incidentInput"></a>

```go
func IncidentInput() SentinelAlertRuleNrtIncident
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a>

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `SentinelEntityMappingInput`<sup>Optional</sup> <a name="SentinelEntityMappingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.sentinelEntityMappingInput"></a>

```go
func SentinelEntityMappingInput() interface{}
```

- *Type:* interface{}

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `SuppressionDurationInput`<sup>Optional</sup> <a name="SuppressionDurationInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionDurationInput"></a>

```go
func SuppressionDurationInput() *string
```

- *Type:* *string

---

##### `SuppressionEnabledInput`<sup>Optional</sup> <a name="SuppressionEnabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionEnabledInput"></a>

```go
func SuppressionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TacticsInput`<sup>Optional</sup> <a name="TacticsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tacticsInput"></a>

```go
func TacticsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TechniquesInput`<sup>Optional</sup> <a name="TechniquesInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.techniquesInput"></a>

```go
func TechniquesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AlertRuleTemplateGuid`<sup>Required</sup> <a name="AlertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateGuid"></a>

```go
func AlertRuleTemplateGuid() *string
```

- *Type:* *string

---

##### `AlertRuleTemplateVersion`<sup>Required</sup> <a name="AlertRuleTemplateVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateVersion"></a>

```go
func AlertRuleTemplateVersion() *string
```

- *Type:* *string

---

##### `CustomDetails`<sup>Required</sup> <a name="CustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.customDetails"></a>

```go
func CustomDetails() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `SuppressionDuration`<sup>Required</sup> <a name="SuppressionDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionDuration"></a>

```go
func SuppressionDuration() *string
```

- *Type:* *string

---

##### `SuppressionEnabled`<sup>Required</sup> <a name="SuppressionEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionEnabled"></a>

```go
func SuppressionEnabled() interface{}
```

- *Type:* interface{}

---

##### `Tactics`<sup>Required</sup> <a name="Tactics" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tactics"></a>

```go
func Tactics() *[]*string
```

- *Type:* *[]*string

---

##### `Techniques`<sup>Required</sup> <a name="Techniques" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.techniques"></a>

```go
func Techniques() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAlertRuleNrtAlertDetailsOverride <a name="SentinelAlertRuleNrtAlertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

&sentinelalertrulenrt.SentinelAlertRuleNrtAlertDetailsOverride {
	DescriptionFormat: *string,
	DisplayNameFormat: *string,
	DynamicProperty: interface{},
	SeverityColumnName: *string,
	TacticsColumnName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.descriptionFormat">DescriptionFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#description_format SentinelAlertRuleNrt#description_format}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.displayNameFormat">DisplayNameFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#display_name_format SentinelAlertRuleNrt#display_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.dynamicProperty">DynamicProperty</a></code> | <code>interface{}</code> | dynamic_property block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.severityColumnName">SeverityColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#severity_column_name SentinelAlertRuleNrt#severity_column_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.tacticsColumnName">TacticsColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#tactics_column_name SentinelAlertRuleNrt#tactics_column_name}. |

---

##### `DescriptionFormat`<sup>Optional</sup> <a name="DescriptionFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.descriptionFormat"></a>

```go
DescriptionFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#description_format SentinelAlertRuleNrt#description_format}.

---

##### `DisplayNameFormat`<sup>Optional</sup> <a name="DisplayNameFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.displayNameFormat"></a>

```go
DisplayNameFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#display_name_format SentinelAlertRuleNrt#display_name_format}.

---

##### `DynamicProperty`<sup>Optional</sup> <a name="DynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.dynamicProperty"></a>

```go
DynamicProperty interface{}
```

- *Type:* interface{}

dynamic_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#dynamic_property SentinelAlertRuleNrt#dynamic_property}

---

##### `SeverityColumnName`<sup>Optional</sup> <a name="SeverityColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.severityColumnName"></a>

```go
SeverityColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#severity_column_name SentinelAlertRuleNrt#severity_column_name}.

---

##### `TacticsColumnName`<sup>Optional</sup> <a name="TacticsColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.tacticsColumnName"></a>

```go
TacticsColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#tactics_column_name SentinelAlertRuleNrt#tactics_column_name}.

---

### SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty <a name="SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

&sentinelalertrulenrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#name SentinelAlertRuleNrt#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#value SentinelAlertRuleNrt#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#name SentinelAlertRuleNrt#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#value SentinelAlertRuleNrt#value}.

---

### SentinelAlertRuleNrtConfig <a name="SentinelAlertRuleNrtConfig" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

&sentinelalertrulenrt.SentinelAlertRuleNrtConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	LogAnalyticsWorkspaceId: *string,
	Name: *string,
	Query: *string,
	Severity: *string,
	AlertDetailsOverride: interface{},
	AlertRuleTemplateGuid: *string,
	AlertRuleTemplateVersion: *string,
	CustomDetails: *map[string]*string,
	Description: *string,
	Enabled: interface{},
	EntityMapping: interface{},
	EventGrouping: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping,
	Id: *string,
	Incident: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident,
	SentinelEntityMapping: interface{},
	SuppressionDuration: *string,
	SuppressionEnabled: interface{},
	Tactics: *[]*string,
	Techniques: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#display_name SentinelAlertRuleNrt#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#log_analytics_workspace_id SentinelAlertRuleNrt#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#name SentinelAlertRuleNrt#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#query SentinelAlertRuleNrt#query}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.severity">Severity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#severity SentinelAlertRuleNrt#severity}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertDetailsOverride">AlertDetailsOverride</a></code> | <code>interface{}</code> | alert_details_override block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertRuleTemplateGuid">AlertRuleTemplateGuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_guid SentinelAlertRuleNrt#alert_rule_template_guid}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertRuleTemplateVersion">AlertRuleTemplateVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_version SentinelAlertRuleNrt#alert_rule_template_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.customDetails">CustomDetails</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#custom_details SentinelAlertRuleNrt#custom_details}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#description SentinelAlertRuleNrt#description}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#enabled SentinelAlertRuleNrt#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.entityMapping">EntityMapping</a></code> | <code>interface{}</code> | entity_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.eventGrouping">EventGrouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a></code> | event_grouping block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#id SentinelAlertRuleNrt#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.incident">Incident</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a></code> | incident block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.sentinelEntityMapping">SentinelEntityMapping</a></code> | <code>interface{}</code> | sentinel_entity_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.suppressionDuration">SuppressionDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#suppression_duration SentinelAlertRuleNrt#suppression_duration}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.suppressionEnabled">SuppressionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#suppression_enabled SentinelAlertRuleNrt#suppression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.tactics">Tactics</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#tactics SentinelAlertRuleNrt#tactics}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.techniques">Techniques</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#techniques SentinelAlertRuleNrt#techniques}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#display_name SentinelAlertRuleNrt#display_name}.

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#log_analytics_workspace_id SentinelAlertRuleNrt#log_analytics_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#name SentinelAlertRuleNrt#name}.

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#query SentinelAlertRuleNrt#query}.

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#severity SentinelAlertRuleNrt#severity}.

---

##### `AlertDetailsOverride`<sup>Optional</sup> <a name="AlertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertDetailsOverride"></a>

```go
AlertDetailsOverride interface{}
```

- *Type:* interface{}

alert_details_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#alert_details_override SentinelAlertRuleNrt#alert_details_override}

---

##### `AlertRuleTemplateGuid`<sup>Optional</sup> <a name="AlertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertRuleTemplateGuid"></a>

```go
AlertRuleTemplateGuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_guid SentinelAlertRuleNrt#alert_rule_template_guid}.

---

##### `AlertRuleTemplateVersion`<sup>Optional</sup> <a name="AlertRuleTemplateVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertRuleTemplateVersion"></a>

```go
AlertRuleTemplateVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_version SentinelAlertRuleNrt#alert_rule_template_version}.

---

##### `CustomDetails`<sup>Optional</sup> <a name="CustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.customDetails"></a>

```go
CustomDetails *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#custom_details SentinelAlertRuleNrt#custom_details}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#description SentinelAlertRuleNrt#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#enabled SentinelAlertRuleNrt#enabled}.

---

##### `EntityMapping`<sup>Optional</sup> <a name="EntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.entityMapping"></a>

```go
EntityMapping interface{}
```

- *Type:* interface{}

entity_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#entity_mapping SentinelAlertRuleNrt#entity_mapping}

---

##### `EventGrouping`<sup>Optional</sup> <a name="EventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.eventGrouping"></a>

```go
EventGrouping SentinelAlertRuleNrtEventGrouping
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a>

event_grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#event_grouping SentinelAlertRuleNrt#event_grouping}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#id SentinelAlertRuleNrt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Incident`<sup>Optional</sup> <a name="Incident" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.incident"></a>

```go
Incident SentinelAlertRuleNrtIncident
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a>

incident block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#incident SentinelAlertRuleNrt#incident}

---

##### `SentinelEntityMapping`<sup>Optional</sup> <a name="SentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.sentinelEntityMapping"></a>

```go
SentinelEntityMapping interface{}
```

- *Type:* interface{}

sentinel_entity_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#sentinel_entity_mapping SentinelAlertRuleNrt#sentinel_entity_mapping}

---

##### `SuppressionDuration`<sup>Optional</sup> <a name="SuppressionDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.suppressionDuration"></a>

```go
SuppressionDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#suppression_duration SentinelAlertRuleNrt#suppression_duration}.

---

##### `SuppressionEnabled`<sup>Optional</sup> <a name="SuppressionEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.suppressionEnabled"></a>

```go
SuppressionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#suppression_enabled SentinelAlertRuleNrt#suppression_enabled}.

---

##### `Tactics`<sup>Optional</sup> <a name="Tactics" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.tactics"></a>

```go
Tactics *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#tactics SentinelAlertRuleNrt#tactics}.

---

##### `Techniques`<sup>Optional</sup> <a name="Techniques" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.techniques"></a>

```go
Techniques *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#techniques SentinelAlertRuleNrt#techniques}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.timeouts"></a>

```go
Timeouts SentinelAlertRuleNrtTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#timeouts SentinelAlertRuleNrt#timeouts}

---

### SentinelAlertRuleNrtEntityMapping <a name="SentinelAlertRuleNrtEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

&sentinelalertrulenrt.SentinelAlertRuleNrtEntityMapping {
	EntityType: *string,
	FieldMapping: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping.property.entityType">EntityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#entity_type SentinelAlertRuleNrt#entity_type}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping.property.fieldMapping">FieldMapping</a></code> | <code>interface{}</code> | field_mapping block. |

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping.property.entityType"></a>

```go
EntityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#entity_type SentinelAlertRuleNrt#entity_type}.

---

##### `FieldMapping`<sup>Required</sup> <a name="FieldMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping.property.fieldMapping"></a>

```go
FieldMapping interface{}
```

- *Type:* interface{}

field_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#field_mapping SentinelAlertRuleNrt#field_mapping}

---

### SentinelAlertRuleNrtEntityMappingFieldMapping <a name="SentinelAlertRuleNrtEntityMappingFieldMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

&sentinelalertrulenrt.SentinelAlertRuleNrtEntityMappingFieldMapping {
	ColumnName: *string,
	Identifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#column_name SentinelAlertRuleNrt#column_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#identifier SentinelAlertRuleNrt#identifier}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#column_name SentinelAlertRuleNrt#column_name}.

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#identifier SentinelAlertRuleNrt#identifier}.

---

### SentinelAlertRuleNrtEventGrouping <a name="SentinelAlertRuleNrtEventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

&sentinelalertrulenrt.SentinelAlertRuleNrtEventGrouping {
	AggregationMethod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping.property.aggregationMethod">AggregationMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#aggregation_method SentinelAlertRuleNrt#aggregation_method}. |

---

##### `AggregationMethod`<sup>Required</sup> <a name="AggregationMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping.property.aggregationMethod"></a>

```go
AggregationMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#aggregation_method SentinelAlertRuleNrt#aggregation_method}.

---

### SentinelAlertRuleNrtIncident <a name="SentinelAlertRuleNrtIncident" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

&sentinelalertrulenrt.SentinelAlertRuleNrtIncident {
	CreateIncidentEnabled: interface{},
	Grouping: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident.property.createIncidentEnabled">CreateIncidentEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#create_incident_enabled SentinelAlertRuleNrt#create_incident_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident.property.grouping">Grouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a></code> | grouping block. |

---

##### `CreateIncidentEnabled`<sup>Required</sup> <a name="CreateIncidentEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident.property.createIncidentEnabled"></a>

```go
CreateIncidentEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#create_incident_enabled SentinelAlertRuleNrt#create_incident_enabled}.

---

##### `Grouping`<sup>Required</sup> <a name="Grouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident.property.grouping"></a>

```go
Grouping SentinelAlertRuleNrtIncidentGrouping
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a>

grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#grouping SentinelAlertRuleNrt#grouping}

---

### SentinelAlertRuleNrtIncidentGrouping <a name="SentinelAlertRuleNrtIncidentGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

&sentinelalertrulenrt.SentinelAlertRuleNrtIncidentGrouping {
	ByAlertDetails: *[]*string,
	ByCustomDetails: *[]*string,
	ByEntities: *[]*string,
	Enabled: interface{},
	EntityMatchingMethod: *string,
	LookbackDuration: *string,
	ReopenClosedIncidents: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byAlertDetails">ByAlertDetails</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#by_alert_details SentinelAlertRuleNrt#by_alert_details}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byCustomDetails">ByCustomDetails</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#by_custom_details SentinelAlertRuleNrt#by_custom_details}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byEntities">ByEntities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#by_entities SentinelAlertRuleNrt#by_entities}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#enabled SentinelAlertRuleNrt#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.entityMatchingMethod">EntityMatchingMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#entity_matching_method SentinelAlertRuleNrt#entity_matching_method}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.lookbackDuration">LookbackDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#lookback_duration SentinelAlertRuleNrt#lookback_duration}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.reopenClosedIncidents">ReopenClosedIncidents</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#reopen_closed_incidents SentinelAlertRuleNrt#reopen_closed_incidents}. |

---

##### `ByAlertDetails`<sup>Optional</sup> <a name="ByAlertDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byAlertDetails"></a>

```go
ByAlertDetails *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#by_alert_details SentinelAlertRuleNrt#by_alert_details}.

---

##### `ByCustomDetails`<sup>Optional</sup> <a name="ByCustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byCustomDetails"></a>

```go
ByCustomDetails *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#by_custom_details SentinelAlertRuleNrt#by_custom_details}.

---

##### `ByEntities`<sup>Optional</sup> <a name="ByEntities" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byEntities"></a>

```go
ByEntities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#by_entities SentinelAlertRuleNrt#by_entities}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#enabled SentinelAlertRuleNrt#enabled}.

---

##### `EntityMatchingMethod`<sup>Optional</sup> <a name="EntityMatchingMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.entityMatchingMethod"></a>

```go
EntityMatchingMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#entity_matching_method SentinelAlertRuleNrt#entity_matching_method}.

---

##### `LookbackDuration`<sup>Optional</sup> <a name="LookbackDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.lookbackDuration"></a>

```go
LookbackDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#lookback_duration SentinelAlertRuleNrt#lookback_duration}.

---

##### `ReopenClosedIncidents`<sup>Optional</sup> <a name="ReopenClosedIncidents" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.reopenClosedIncidents"></a>

```go
ReopenClosedIncidents interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#reopen_closed_incidents SentinelAlertRuleNrt#reopen_closed_incidents}.

---

### SentinelAlertRuleNrtSentinelEntityMapping <a name="SentinelAlertRuleNrtSentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

&sentinelalertrulenrt.SentinelAlertRuleNrtSentinelEntityMapping {
	ColumnName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#column_name SentinelAlertRuleNrt#column_name}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#column_name SentinelAlertRuleNrt#column_name}.

---

### SentinelAlertRuleNrtTimeouts <a name="SentinelAlertRuleNrtTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

&sentinelalertrulenrt.SentinelAlertRuleNrtTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#create SentinelAlertRuleNrt#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#delete SentinelAlertRuleNrt#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#read SentinelAlertRuleNrt#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#update SentinelAlertRuleNrt#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#create SentinelAlertRuleNrt#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#delete SentinelAlertRuleNrt#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#read SentinelAlertRuleNrt#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_alert_rule_nrt#update SentinelAlertRuleNrt#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList <a name="SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.NewSentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference <a name="SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.NewSentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleNrtAlertDetailsOverrideList <a name="SentinelAlertRuleNrtAlertDetailsOverrideList" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.NewSentinelAlertRuleNrtAlertDetailsOverrideList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleNrtAlertDetailsOverrideList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleNrtAlertDetailsOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleNrtAlertDetailsOverrideOutputReference <a name="SentinelAlertRuleNrtAlertDetailsOverrideOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.NewSentinelAlertRuleNrtAlertDetailsOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleNrtAlertDetailsOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.putDynamicProperty">PutDynamicProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDescriptionFormat">ResetDescriptionFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDisplayNameFormat">ResetDisplayNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDynamicProperty">ResetDynamicProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetSeverityColumnName">ResetSeverityColumnName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetTacticsColumnName">ResetTacticsColumnName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDynamicProperty` <a name="PutDynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.putDynamicProperty"></a>

```go
func PutDynamicProperty(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.putDynamicProperty.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescriptionFormat` <a name="ResetDescriptionFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDescriptionFormat"></a>

```go
func ResetDescriptionFormat()
```

##### `ResetDisplayNameFormat` <a name="ResetDisplayNameFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDisplayNameFormat"></a>

```go
func ResetDisplayNameFormat()
```

##### `ResetDynamicProperty` <a name="ResetDynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDynamicProperty"></a>

```go
func ResetDynamicProperty()
```

##### `ResetSeverityColumnName` <a name="ResetSeverityColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetSeverityColumnName"></a>

```go
func ResetSeverityColumnName()
```

##### `ResetTacticsColumnName` <a name="ResetTacticsColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetTacticsColumnName"></a>

```go
func ResetTacticsColumnName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.dynamicProperty">DynamicProperty</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList">SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.descriptionFormatInput">DescriptionFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.displayNameFormatInput">DisplayNameFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.dynamicPropertyInput">DynamicPropertyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.severityColumnNameInput">SeverityColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.tacticsColumnNameInput">TacticsColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.descriptionFormat">DescriptionFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.displayNameFormat">DisplayNameFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.severityColumnName">SeverityColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.tacticsColumnName">TacticsColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DynamicProperty`<sup>Required</sup> <a name="DynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.dynamicProperty"></a>

```go
func DynamicProperty() SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList">SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList</a>

---

##### `DescriptionFormatInput`<sup>Optional</sup> <a name="DescriptionFormatInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.descriptionFormatInput"></a>

```go
func DescriptionFormatInput() *string
```

- *Type:* *string

---

##### `DisplayNameFormatInput`<sup>Optional</sup> <a name="DisplayNameFormatInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.displayNameFormatInput"></a>

```go
func DisplayNameFormatInput() *string
```

- *Type:* *string

---

##### `DynamicPropertyInput`<sup>Optional</sup> <a name="DynamicPropertyInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.dynamicPropertyInput"></a>

```go
func DynamicPropertyInput() interface{}
```

- *Type:* interface{}

---

##### `SeverityColumnNameInput`<sup>Optional</sup> <a name="SeverityColumnNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.severityColumnNameInput"></a>

```go
func SeverityColumnNameInput() *string
```

- *Type:* *string

---

##### `TacticsColumnNameInput`<sup>Optional</sup> <a name="TacticsColumnNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.tacticsColumnNameInput"></a>

```go
func TacticsColumnNameInput() *string
```

- *Type:* *string

---

##### `DescriptionFormat`<sup>Required</sup> <a name="DescriptionFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.descriptionFormat"></a>

```go
func DescriptionFormat() *string
```

- *Type:* *string

---

##### `DisplayNameFormat`<sup>Required</sup> <a name="DisplayNameFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.displayNameFormat"></a>

```go
func DisplayNameFormat() *string
```

- *Type:* *string

---

##### `SeverityColumnName`<sup>Required</sup> <a name="SeverityColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.severityColumnName"></a>

```go
func SeverityColumnName() *string
```

- *Type:* *string

---

##### `TacticsColumnName`<sup>Required</sup> <a name="TacticsColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.tacticsColumnName"></a>

```go
func TacticsColumnName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleNrtEntityMappingFieldMappingList <a name="SentinelAlertRuleNrtEntityMappingFieldMappingList" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.NewSentinelAlertRuleNrtEntityMappingFieldMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleNrtEntityMappingFieldMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference <a name="SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.NewSentinelAlertRuleNrtEntityMappingFieldMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleNrtEntityMappingList <a name="SentinelAlertRuleNrtEntityMappingList" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.NewSentinelAlertRuleNrtEntityMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleNrtEntityMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleNrtEntityMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleNrtEntityMappingOutputReference <a name="SentinelAlertRuleNrtEntityMappingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.NewSentinelAlertRuleNrtEntityMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleNrtEntityMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.putFieldMapping">PutFieldMapping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldMapping` <a name="PutFieldMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.putFieldMapping"></a>

```go
func PutFieldMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.putFieldMapping.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fieldMapping">FieldMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList">SentinelAlertRuleNrtEntityMappingFieldMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.entityTypeInput">EntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fieldMappingInput">FieldMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldMapping`<sup>Required</sup> <a name="FieldMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fieldMapping"></a>

```go
func FieldMapping() SentinelAlertRuleNrtEntityMappingFieldMappingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList">SentinelAlertRuleNrtEntityMappingFieldMappingList</a>

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.entityTypeInput"></a>

```go
func EntityTypeInput() *string
```

- *Type:* *string

---

##### `FieldMappingInput`<sup>Optional</sup> <a name="FieldMappingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fieldMappingInput"></a>

```go
func FieldMappingInput() interface{}
```

- *Type:* interface{}

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleNrtEventGroupingOutputReference <a name="SentinelAlertRuleNrtEventGroupingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.NewSentinelAlertRuleNrtEventGroupingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelAlertRuleNrtEventGroupingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.aggregationMethodInput">AggregationMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.aggregationMethod">AggregationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationMethodInput`<sup>Optional</sup> <a name="AggregationMethodInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.aggregationMethodInput"></a>

```go
func AggregationMethodInput() *string
```

- *Type:* *string

---

##### `AggregationMethod`<sup>Required</sup> <a name="AggregationMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.aggregationMethod"></a>

```go
func AggregationMethod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelAlertRuleNrtEventGrouping
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a>

---


### SentinelAlertRuleNrtIncidentGroupingOutputReference <a name="SentinelAlertRuleNrtIncidentGroupingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.NewSentinelAlertRuleNrtIncidentGroupingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelAlertRuleNrtIncidentGroupingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByAlertDetails">ResetByAlertDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByCustomDetails">ResetByCustomDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByEntities">ResetByEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetEntityMatchingMethod">ResetEntityMatchingMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetLookbackDuration">ResetLookbackDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetReopenClosedIncidents">ResetReopenClosedIncidents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetByAlertDetails` <a name="ResetByAlertDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByAlertDetails"></a>

```go
func ResetByAlertDetails()
```

##### `ResetByCustomDetails` <a name="ResetByCustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByCustomDetails"></a>

```go
func ResetByCustomDetails()
```

##### `ResetByEntities` <a name="ResetByEntities" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByEntities"></a>

```go
func ResetByEntities()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEntityMatchingMethod` <a name="ResetEntityMatchingMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetEntityMatchingMethod"></a>

```go
func ResetEntityMatchingMethod()
```

##### `ResetLookbackDuration` <a name="ResetLookbackDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetLookbackDuration"></a>

```go
func ResetLookbackDuration()
```

##### `ResetReopenClosedIncidents` <a name="ResetReopenClosedIncidents" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetReopenClosedIncidents"></a>

```go
func ResetReopenClosedIncidents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byAlertDetailsInput">ByAlertDetailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byCustomDetailsInput">ByCustomDetailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byEntitiesInput">ByEntitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.entityMatchingMethodInput">EntityMatchingMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.lookbackDurationInput">LookbackDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.reopenClosedIncidentsInput">ReopenClosedIncidentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byAlertDetails">ByAlertDetails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byCustomDetails">ByCustomDetails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byEntities">ByEntities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.entityMatchingMethod">EntityMatchingMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.lookbackDuration">LookbackDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.reopenClosedIncidents">ReopenClosedIncidents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ByAlertDetailsInput`<sup>Optional</sup> <a name="ByAlertDetailsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byAlertDetailsInput"></a>

```go
func ByAlertDetailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ByCustomDetailsInput`<sup>Optional</sup> <a name="ByCustomDetailsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byCustomDetailsInput"></a>

```go
func ByCustomDetailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ByEntitiesInput`<sup>Optional</sup> <a name="ByEntitiesInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byEntitiesInput"></a>

```go
func ByEntitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EntityMatchingMethodInput`<sup>Optional</sup> <a name="EntityMatchingMethodInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.entityMatchingMethodInput"></a>

```go
func EntityMatchingMethodInput() *string
```

- *Type:* *string

---

##### `LookbackDurationInput`<sup>Optional</sup> <a name="LookbackDurationInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.lookbackDurationInput"></a>

```go
func LookbackDurationInput() *string
```

- *Type:* *string

---

##### `ReopenClosedIncidentsInput`<sup>Optional</sup> <a name="ReopenClosedIncidentsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.reopenClosedIncidentsInput"></a>

```go
func ReopenClosedIncidentsInput() interface{}
```

- *Type:* interface{}

---

##### `ByAlertDetails`<sup>Required</sup> <a name="ByAlertDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byAlertDetails"></a>

```go
func ByAlertDetails() *[]*string
```

- *Type:* *[]*string

---

##### `ByCustomDetails`<sup>Required</sup> <a name="ByCustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byCustomDetails"></a>

```go
func ByCustomDetails() *[]*string
```

- *Type:* *[]*string

---

##### `ByEntities`<sup>Required</sup> <a name="ByEntities" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byEntities"></a>

```go
func ByEntities() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EntityMatchingMethod`<sup>Required</sup> <a name="EntityMatchingMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.entityMatchingMethod"></a>

```go
func EntityMatchingMethod() *string
```

- *Type:* *string

---

##### `LookbackDuration`<sup>Required</sup> <a name="LookbackDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.lookbackDuration"></a>

```go
func LookbackDuration() *string
```

- *Type:* *string

---

##### `ReopenClosedIncidents`<sup>Required</sup> <a name="ReopenClosedIncidents" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.reopenClosedIncidents"></a>

```go
func ReopenClosedIncidents() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelAlertRuleNrtIncidentGrouping
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a>

---


### SentinelAlertRuleNrtIncidentOutputReference <a name="SentinelAlertRuleNrtIncidentOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.NewSentinelAlertRuleNrtIncidentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelAlertRuleNrtIncidentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.putGrouping">PutGrouping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrouping` <a name="PutGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.putGrouping"></a>

```go
func PutGrouping(value SentinelAlertRuleNrtIncidentGrouping)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.putGrouping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.grouping">Grouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference">SentinelAlertRuleNrtIncidentGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.createIncidentEnabledInput">CreateIncidentEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.groupingInput">GroupingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.createIncidentEnabled">CreateIncidentEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Grouping`<sup>Required</sup> <a name="Grouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.grouping"></a>

```go
func Grouping() SentinelAlertRuleNrtIncidentGroupingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference">SentinelAlertRuleNrtIncidentGroupingOutputReference</a>

---

##### `CreateIncidentEnabledInput`<sup>Optional</sup> <a name="CreateIncidentEnabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.createIncidentEnabledInput"></a>

```go
func CreateIncidentEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GroupingInput`<sup>Optional</sup> <a name="GroupingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.groupingInput"></a>

```go
func GroupingInput() SentinelAlertRuleNrtIncidentGrouping
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a>

---

##### `CreateIncidentEnabled`<sup>Required</sup> <a name="CreateIncidentEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.createIncidentEnabled"></a>

```go
func CreateIncidentEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelAlertRuleNrtIncident
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a>

---


### SentinelAlertRuleNrtSentinelEntityMappingList <a name="SentinelAlertRuleNrtSentinelEntityMappingList" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.NewSentinelAlertRuleNrtSentinelEntityMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleNrtSentinelEntityMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleNrtSentinelEntityMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleNrtSentinelEntityMappingOutputReference <a name="SentinelAlertRuleNrtSentinelEntityMappingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.NewSentinelAlertRuleNrtSentinelEntityMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleNrtSentinelEntityMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleNrtTimeoutsOutputReference <a name="SentinelAlertRuleNrtTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sentinelalertrulenrt"

sentinelalertrulenrt.NewSentinelAlertRuleNrtTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelAlertRuleNrtTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



