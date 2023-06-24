# `azurerm_automanage_configuration`

Refer to the Terraform Registory for docs: [`azurerm_automanage_configuration`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration).

# `automanageConfiguration` Submodule <a name="`automanageConfiguration` Submodule" id="@cdktf/provider-azurerm.automanageConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomanageConfiguration <a name="AutomanageConfiguration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration azurerm_automanage_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

automanageconfiguration.NewAutomanageConfiguration(scope Construct, id *string, config AutomanageConfigurationConfig) AutomanageConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig">AutomanageConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig">AutomanageConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAntimalware">PutAntimalware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAzureSecurityBaseline">PutAzureSecurityBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putBackup">PutBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAntimalware">ResetAntimalware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAutomationAccountEnabled">ResetAutomationAccountEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAzureSecurityBaseline">ResetAzureSecurityBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetBackup">ResetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetBootDiagnosticsEnabled">ResetBootDiagnosticsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetDefenderForCloudEnabled">ResetDefenderForCloudEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetGuestConfigurationEnabled">ResetGuestConfigurationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetLogAnalyticsEnabled">ResetLogAnalyticsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetStatusChangeAlertEnabled">ResetStatusChangeAlertEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAntimalware` <a name="PutAntimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAntimalware"></a>

```go
func PutAntimalware(value AutomanageConfigurationAntimalware)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAntimalware.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

---

##### `PutAzureSecurityBaseline` <a name="PutAzureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAzureSecurityBaseline"></a>

```go
func PutAzureSecurityBaseline(value AutomanageConfigurationAzureSecurityBaseline)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAzureSecurityBaseline.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

---

##### `PutBackup` <a name="PutBackup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putBackup"></a>

```go
func PutBackup(value AutomanageConfigurationBackup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value AutomanageConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a>

---

##### `ResetAntimalware` <a name="ResetAntimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAntimalware"></a>

```go
func ResetAntimalware()
```

##### `ResetAutomationAccountEnabled` <a name="ResetAutomationAccountEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAutomationAccountEnabled"></a>

```go
func ResetAutomationAccountEnabled()
```

##### `ResetAzureSecurityBaseline` <a name="ResetAzureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAzureSecurityBaseline"></a>

```go
func ResetAzureSecurityBaseline()
```

##### `ResetBackup` <a name="ResetBackup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetBackup"></a>

```go
func ResetBackup()
```

##### `ResetBootDiagnosticsEnabled` <a name="ResetBootDiagnosticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetBootDiagnosticsEnabled"></a>

```go
func ResetBootDiagnosticsEnabled()
```

##### `ResetDefenderForCloudEnabled` <a name="ResetDefenderForCloudEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetDefenderForCloudEnabled"></a>

```go
func ResetDefenderForCloudEnabled()
```

##### `ResetGuestConfigurationEnabled` <a name="ResetGuestConfigurationEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetGuestConfigurationEnabled"></a>

```go
func ResetGuestConfigurationEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetLogAnalyticsEnabled` <a name="ResetLogAnalyticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetLogAnalyticsEnabled"></a>

```go
func ResetLogAnalyticsEnabled()
```

##### `ResetStatusChangeAlertEnabled` <a name="ResetStatusChangeAlertEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetStatusChangeAlertEnabled"></a>

```go
func ResetStatusChangeAlertEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

automanageconfiguration.AutomanageConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

automanageconfiguration.AutomanageConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

automanageconfiguration.AutomanageConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.antimalware">Antimalware</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference">AutomanageConfigurationAntimalwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.azureSecurityBaseline">AzureSecurityBaseline</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference">AutomanageConfigurationAzureSecurityBaselineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference">AutomanageConfigurationBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference">AutomanageConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.antimalwareInput">AntimalwareInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.automationAccountEnabledInput">AutomationAccountEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.azureSecurityBaselineInput">AzureSecurityBaselineInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.backupInput">BackupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.bootDiagnosticsEnabledInput">BootDiagnosticsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.defenderForCloudEnabledInput">DefenderForCloudEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.guestConfigurationEnabledInput">GuestConfigurationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.logAnalyticsEnabledInput">LogAnalyticsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.statusChangeAlertEnabledInput">StatusChangeAlertEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.automationAccountEnabled">AutomationAccountEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.bootDiagnosticsEnabled">BootDiagnosticsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.defenderForCloudEnabled">DefenderForCloudEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.guestConfigurationEnabled">GuestConfigurationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.logAnalyticsEnabled">LogAnalyticsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.statusChangeAlertEnabled">StatusChangeAlertEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Antimalware`<sup>Required</sup> <a name="Antimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.antimalware"></a>

```go
func Antimalware() AutomanageConfigurationAntimalwareOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference">AutomanageConfigurationAntimalwareOutputReference</a>

---

##### `AzureSecurityBaseline`<sup>Required</sup> <a name="AzureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.azureSecurityBaseline"></a>

```go
func AzureSecurityBaseline() AutomanageConfigurationAzureSecurityBaselineOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference">AutomanageConfigurationAzureSecurityBaselineOutputReference</a>

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.backup"></a>

```go
func Backup() AutomanageConfigurationBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference">AutomanageConfigurationBackupOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.timeouts"></a>

```go
func Timeouts() AutomanageConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference">AutomanageConfigurationTimeoutsOutputReference</a>

---

##### `AntimalwareInput`<sup>Optional</sup> <a name="AntimalwareInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.antimalwareInput"></a>

```go
func AntimalwareInput() AutomanageConfigurationAntimalware
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

---

##### `AutomationAccountEnabledInput`<sup>Optional</sup> <a name="AutomationAccountEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.automationAccountEnabledInput"></a>

```go
func AutomationAccountEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AzureSecurityBaselineInput`<sup>Optional</sup> <a name="AzureSecurityBaselineInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.azureSecurityBaselineInput"></a>

```go
func AzureSecurityBaselineInput() AutomanageConfigurationAzureSecurityBaseline
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

---

##### `BackupInput`<sup>Optional</sup> <a name="BackupInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.backupInput"></a>

```go
func BackupInput() AutomanageConfigurationBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

---

##### `BootDiagnosticsEnabledInput`<sup>Optional</sup> <a name="BootDiagnosticsEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.bootDiagnosticsEnabledInput"></a>

```go
func BootDiagnosticsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DefenderForCloudEnabledInput`<sup>Optional</sup> <a name="DefenderForCloudEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.defenderForCloudEnabledInput"></a>

```go
func DefenderForCloudEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GuestConfigurationEnabledInput`<sup>Optional</sup> <a name="GuestConfigurationEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.guestConfigurationEnabledInput"></a>

```go
func GuestConfigurationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsEnabledInput`<sup>Optional</sup> <a name="LogAnalyticsEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.logAnalyticsEnabledInput"></a>

```go
func LogAnalyticsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `StatusChangeAlertEnabledInput`<sup>Optional</sup> <a name="StatusChangeAlertEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.statusChangeAlertEnabledInput"></a>

```go
func StatusChangeAlertEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutomationAccountEnabled`<sup>Required</sup> <a name="AutomationAccountEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.automationAccountEnabled"></a>

```go
func AutomationAccountEnabled() interface{}
```

- *Type:* interface{}

---

##### `BootDiagnosticsEnabled`<sup>Required</sup> <a name="BootDiagnosticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.bootDiagnosticsEnabled"></a>

```go
func BootDiagnosticsEnabled() interface{}
```

- *Type:* interface{}

---

##### `DefenderForCloudEnabled`<sup>Required</sup> <a name="DefenderForCloudEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.defenderForCloudEnabled"></a>

```go
func DefenderForCloudEnabled() interface{}
```

- *Type:* interface{}

---

##### `GuestConfigurationEnabled`<sup>Required</sup> <a name="GuestConfigurationEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.guestConfigurationEnabled"></a>

```go
func GuestConfigurationEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `LogAnalyticsEnabled`<sup>Required</sup> <a name="LogAnalyticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.logAnalyticsEnabled"></a>

```go
func LogAnalyticsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `StatusChangeAlertEnabled`<sup>Required</sup> <a name="StatusChangeAlertEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.statusChangeAlertEnabled"></a>

```go
func StatusChangeAlertEnabled() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomanageConfigurationAntimalware <a name="AutomanageConfigurationAntimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

&automanageconfiguration.AutomanageConfigurationAntimalware {
	Exclusions: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions,
	RealTimeProtectionEnabled: interface{},
	ScheduledScanDay: *f64,
	ScheduledScanEnabled: interface{},
	ScheduledScanTimeInMinutes: *f64,
	ScheduledScanType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.exclusions">Exclusions</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a></code> | exclusions block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.realTimeProtectionEnabled">RealTimeProtectionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#real_time_protection_enabled AutomanageConfiguration#real_time_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanDay">ScheduledScanDay</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#scheduled_scan_day AutomanageConfiguration#scheduled_scan_day}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanEnabled">ScheduledScanEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#scheduled_scan_enabled AutomanageConfiguration#scheduled_scan_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanTimeInMinutes">ScheduledScanTimeInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#scheduled_scan_time_in_minutes AutomanageConfiguration#scheduled_scan_time_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanType">ScheduledScanType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#scheduled_scan_type AutomanageConfiguration#scheduled_scan_type}. |

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.exclusions"></a>

```go
Exclusions AutomanageConfigurationAntimalwareExclusions
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a>

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#exclusions AutomanageConfiguration#exclusions}

---

##### `RealTimeProtectionEnabled`<sup>Optional</sup> <a name="RealTimeProtectionEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.realTimeProtectionEnabled"></a>

```go
RealTimeProtectionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#real_time_protection_enabled AutomanageConfiguration#real_time_protection_enabled}.

---

##### `ScheduledScanDay`<sup>Optional</sup> <a name="ScheduledScanDay" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanDay"></a>

```go
ScheduledScanDay *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#scheduled_scan_day AutomanageConfiguration#scheduled_scan_day}.

---

##### `ScheduledScanEnabled`<sup>Optional</sup> <a name="ScheduledScanEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanEnabled"></a>

```go
ScheduledScanEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#scheduled_scan_enabled AutomanageConfiguration#scheduled_scan_enabled}.

---

##### `ScheduledScanTimeInMinutes`<sup>Optional</sup> <a name="ScheduledScanTimeInMinutes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanTimeInMinutes"></a>

```go
ScheduledScanTimeInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#scheduled_scan_time_in_minutes AutomanageConfiguration#scheduled_scan_time_in_minutes}.

---

##### `ScheduledScanType`<sup>Optional</sup> <a name="ScheduledScanType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanType"></a>

```go
ScheduledScanType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#scheduled_scan_type AutomanageConfiguration#scheduled_scan_type}.

---

### AutomanageConfigurationAntimalwareExclusions <a name="AutomanageConfigurationAntimalwareExclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

&automanageconfiguration.AutomanageConfigurationAntimalwareExclusions {
	Extensions: *string,
	Paths: *string,
	Processes: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.extensions">Extensions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#extensions AutomanageConfiguration#extensions}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.paths">Paths</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#paths AutomanageConfiguration#paths}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.processes">Processes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#processes AutomanageConfiguration#processes}. |

---

##### `Extensions`<sup>Optional</sup> <a name="Extensions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.extensions"></a>

```go
Extensions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#extensions AutomanageConfiguration#extensions}.

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.paths"></a>

```go
Paths *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#paths AutomanageConfiguration#paths}.

---

##### `Processes`<sup>Optional</sup> <a name="Processes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.processes"></a>

```go
Processes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#processes AutomanageConfiguration#processes}.

---

### AutomanageConfigurationAzureSecurityBaseline <a name="AutomanageConfigurationAzureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

&automanageconfiguration.AutomanageConfigurationAzureSecurityBaseline {
	AssignmentType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline.property.assignmentType">AssignmentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#assignment_type AutomanageConfiguration#assignment_type}. |

---

##### `AssignmentType`<sup>Optional</sup> <a name="AssignmentType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline.property.assignmentType"></a>

```go
AssignmentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#assignment_type AutomanageConfiguration#assignment_type}.

---

### AutomanageConfigurationBackup <a name="AutomanageConfigurationBackup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

&automanageconfiguration.AutomanageConfigurationBackup {
	InstantRpRetentionRangeInDays: *f64,
	PolicyName: *string,
	RetentionPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy,
	SchedulePolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.instantRpRetentionRangeInDays">InstantRpRetentionRangeInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#instant_rp_retention_range_in_days AutomanageConfiguration#instant_rp_retention_range_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.policyName">PolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#policy_name AutomanageConfiguration#policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.schedulePolicy">SchedulePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a></code> | schedule_policy block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#time_zone AutomanageConfiguration#time_zone}. |

---

##### `InstantRpRetentionRangeInDays`<sup>Optional</sup> <a name="InstantRpRetentionRangeInDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.instantRpRetentionRangeInDays"></a>

```go
InstantRpRetentionRangeInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#instant_rp_retention_range_in_days AutomanageConfiguration#instant_rp_retention_range_in_days}.

---

##### `PolicyName`<sup>Optional</sup> <a name="PolicyName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.policyName"></a>

```go
PolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#policy_name AutomanageConfiguration#policy_name}.

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.retentionPolicy"></a>

```go
RetentionPolicy AutomanageConfigurationBackupRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#retention_policy AutomanageConfiguration#retention_policy}

---

##### `SchedulePolicy`<sup>Optional</sup> <a name="SchedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.schedulePolicy"></a>

```go
SchedulePolicy AutomanageConfigurationBackupSchedulePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a>

schedule_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#schedule_policy AutomanageConfiguration#schedule_policy}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#time_zone AutomanageConfiguration#time_zone}.

---

### AutomanageConfigurationBackupRetentionPolicy <a name="AutomanageConfigurationBackupRetentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

&automanageconfiguration.AutomanageConfigurationBackupRetentionPolicy {
	DailySchedule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule,
	RetentionPolicyType: *string,
	WeeklySchedule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.retentionPolicyType">RetentionPolicyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#retention_policy_type AutomanageConfiguration#retention_policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `DailySchedule`<sup>Optional</sup> <a name="DailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.dailySchedule"></a>

```go
DailySchedule AutomanageConfigurationBackupRetentionPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#daily_schedule AutomanageConfiguration#daily_schedule}

---

##### `RetentionPolicyType`<sup>Optional</sup> <a name="RetentionPolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.retentionPolicyType"></a>

```go
RetentionPolicyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#retention_policy_type AutomanageConfiguration#retention_policy_type}.

---

##### `WeeklySchedule`<sup>Optional</sup> <a name="WeeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.weeklySchedule"></a>

```go
WeeklySchedule AutomanageConfigurationBackupRetentionPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#weekly_schedule AutomanageConfiguration#weekly_schedule}

---

### AutomanageConfigurationBackupRetentionPolicyDailySchedule <a name="AutomanageConfigurationBackupRetentionPolicyDailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

&automanageconfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule {
	RetentionDuration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration,
	RetentionTimes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.property.retentionDuration">RetentionDuration</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a></code> | retention_duration block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.property.retentionTimes">RetentionTimes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}. |

---

##### `RetentionDuration`<sup>Optional</sup> <a name="RetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.property.retentionDuration"></a>

```go
RetentionDuration AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a>

retention_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#retention_duration AutomanageConfiguration#retention_duration}

---

##### `RetentionTimes`<sup>Optional</sup> <a name="RetentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.property.retentionTimes"></a>

```go
RetentionTimes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}.

---

### AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration <a name="AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

&automanageconfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration {
	Count: *f64,
	DurationType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.property.count">Count</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#count AutomanageConfiguration#count}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.property.durationType">DurationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#count AutomanageConfiguration#count}.

---

##### `DurationType`<sup>Optional</sup> <a name="DurationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.property.durationType"></a>

```go
DurationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}.

---

### AutomanageConfigurationBackupRetentionPolicyWeeklySchedule <a name="AutomanageConfigurationBackupRetentionPolicyWeeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

&automanageconfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule {
	RetentionDuration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration,
	RetentionTimes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.property.retentionDuration">RetentionDuration</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a></code> | retention_duration block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.property.retentionTimes">RetentionTimes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}. |

---

##### `RetentionDuration`<sup>Optional</sup> <a name="RetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.property.retentionDuration"></a>

```go
RetentionDuration AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a>

retention_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#retention_duration AutomanageConfiguration#retention_duration}

---

##### `RetentionTimes`<sup>Optional</sup> <a name="RetentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.property.retentionTimes"></a>

```go
RetentionTimes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}.

---

### AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration <a name="AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

&automanageconfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration {
	Count: *f64,
	DurationType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.property.count">Count</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#count AutomanageConfiguration#count}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.property.durationType">DurationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#count AutomanageConfiguration#count}.

---

##### `DurationType`<sup>Optional</sup> <a name="DurationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.property.durationType"></a>

```go
DurationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}.

---

### AutomanageConfigurationBackupSchedulePolicy <a name="AutomanageConfigurationBackupSchedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

&automanageconfiguration.AutomanageConfigurationBackupSchedulePolicy {
	SchedulePolicyType: *string,
	ScheduleRunDays: *[]*string,
	ScheduleRunFrequency: *string,
	ScheduleRunTimes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.schedulePolicyType">SchedulePolicyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#schedule_policy_type AutomanageConfiguration#schedule_policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunDays">ScheduleRunDays</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#schedule_run_days AutomanageConfiguration#schedule_run_days}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunFrequency">ScheduleRunFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#schedule_run_frequency AutomanageConfiguration#schedule_run_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunTimes">ScheduleRunTimes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#schedule_run_times AutomanageConfiguration#schedule_run_times}. |

---

##### `SchedulePolicyType`<sup>Optional</sup> <a name="SchedulePolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.schedulePolicyType"></a>

```go
SchedulePolicyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#schedule_policy_type AutomanageConfiguration#schedule_policy_type}.

---

##### `ScheduleRunDays`<sup>Optional</sup> <a name="ScheduleRunDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunDays"></a>

```go
ScheduleRunDays *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#schedule_run_days AutomanageConfiguration#schedule_run_days}.

---

##### `ScheduleRunFrequency`<sup>Optional</sup> <a name="ScheduleRunFrequency" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunFrequency"></a>

```go
ScheduleRunFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#schedule_run_frequency AutomanageConfiguration#schedule_run_frequency}.

---

##### `ScheduleRunTimes`<sup>Optional</sup> <a name="ScheduleRunTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunTimes"></a>

```go
ScheduleRunTimes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#schedule_run_times AutomanageConfiguration#schedule_run_times}.

---

### AutomanageConfigurationConfig <a name="AutomanageConfigurationConfig" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

&automanageconfiguration.AutomanageConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Antimalware: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.automanageConfiguration.AutomanageConfigurationAntimalware,
	AutomationAccountEnabled: interface{},
	AzureSecurityBaseline: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline,
	Backup: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.automanageConfiguration.AutomanageConfigurationBackup,
	BootDiagnosticsEnabled: interface{},
	DefenderForCloudEnabled: interface{},
	GuestConfigurationEnabled: interface{},
	Id: *string,
	LogAnalyticsEnabled: interface{},
	StatusChangeAlertEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.automanageConfiguration.AutomanageConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#location AutomanageConfiguration#location}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#name AutomanageConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#resource_group_name AutomanageConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.antimalware">Antimalware</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a></code> | antimalware block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.automationAccountEnabled">AutomationAccountEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#automation_account_enabled AutomanageConfiguration#automation_account_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.azureSecurityBaseline">AzureSecurityBaseline</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a></code> | azure_security_baseline block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.bootDiagnosticsEnabled">BootDiagnosticsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#boot_diagnostics_enabled AutomanageConfiguration#boot_diagnostics_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.defenderForCloudEnabled">DefenderForCloudEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#defender_for_cloud_enabled AutomanageConfiguration#defender_for_cloud_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.guestConfigurationEnabled">GuestConfigurationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#guest_configuration_enabled AutomanageConfiguration#guest_configuration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#id AutomanageConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.logAnalyticsEnabled">LogAnalyticsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#log_analytics_enabled AutomanageConfiguration#log_analytics_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.statusChangeAlertEnabled">StatusChangeAlertEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#status_change_alert_enabled AutomanageConfiguration#status_change_alert_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#tags AutomanageConfiguration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#location AutomanageConfiguration#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#name AutomanageConfiguration#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#resource_group_name AutomanageConfiguration#resource_group_name}.

---

##### `Antimalware`<sup>Optional</sup> <a name="Antimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.antimalware"></a>

```go
Antimalware AutomanageConfigurationAntimalware
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

antimalware block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#antimalware AutomanageConfiguration#antimalware}

---

##### `AutomationAccountEnabled`<sup>Optional</sup> <a name="AutomationAccountEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.automationAccountEnabled"></a>

```go
AutomationAccountEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#automation_account_enabled AutomanageConfiguration#automation_account_enabled}.

---

##### `AzureSecurityBaseline`<sup>Optional</sup> <a name="AzureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.azureSecurityBaseline"></a>

```go
AzureSecurityBaseline AutomanageConfigurationAzureSecurityBaseline
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

azure_security_baseline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#azure_security_baseline AutomanageConfiguration#azure_security_baseline}

---

##### `Backup`<sup>Optional</sup> <a name="Backup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.backup"></a>

```go
Backup AutomanageConfigurationBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#backup AutomanageConfiguration#backup}

---

##### `BootDiagnosticsEnabled`<sup>Optional</sup> <a name="BootDiagnosticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.bootDiagnosticsEnabled"></a>

```go
BootDiagnosticsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#boot_diagnostics_enabled AutomanageConfiguration#boot_diagnostics_enabled}.

---

##### `DefenderForCloudEnabled`<sup>Optional</sup> <a name="DefenderForCloudEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.defenderForCloudEnabled"></a>

```go
DefenderForCloudEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#defender_for_cloud_enabled AutomanageConfiguration#defender_for_cloud_enabled}.

---

##### `GuestConfigurationEnabled`<sup>Optional</sup> <a name="GuestConfigurationEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.guestConfigurationEnabled"></a>

```go
GuestConfigurationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#guest_configuration_enabled AutomanageConfiguration#guest_configuration_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#id AutomanageConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogAnalyticsEnabled`<sup>Optional</sup> <a name="LogAnalyticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.logAnalyticsEnabled"></a>

```go
LogAnalyticsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#log_analytics_enabled AutomanageConfiguration#log_analytics_enabled}.

---

##### `StatusChangeAlertEnabled`<sup>Optional</sup> <a name="StatusChangeAlertEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.statusChangeAlertEnabled"></a>

```go
StatusChangeAlertEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#status_change_alert_enabled AutomanageConfiguration#status_change_alert_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#tags AutomanageConfiguration#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.timeouts"></a>

```go
Timeouts AutomanageConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#timeouts AutomanageConfiguration#timeouts}

---

### AutomanageConfigurationTimeouts <a name="AutomanageConfigurationTimeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

&automanageconfiguration.AutomanageConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#create AutomanageConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#delete AutomanageConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#read AutomanageConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#update AutomanageConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#create AutomanageConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#delete AutomanageConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#read AutomanageConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automanage_configuration#update AutomanageConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomanageConfigurationAntimalwareExclusionsOutputReference <a name="AutomanageConfigurationAntimalwareExclusionsOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

automanageconfiguration.NewAutomanageConfigurationAntimalwareExclusionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomanageConfigurationAntimalwareExclusionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetExtensions">ResetExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetPaths">ResetPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetProcesses">ResetProcesses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExtensions` <a name="ResetExtensions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetExtensions"></a>

```go
func ResetExtensions()
```

##### `ResetPaths` <a name="ResetPaths" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetPaths"></a>

```go
func ResetPaths()
```

##### `ResetProcesses` <a name="ResetProcesses" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetProcesses"></a>

```go
func ResetProcesses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.extensionsInput">ExtensionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.pathsInput">PathsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.processesInput">ProcessesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.extensions">Extensions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.paths">Paths</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.processes">Processes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExtensionsInput`<sup>Optional</sup> <a name="ExtensionsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.extensionsInput"></a>

```go
func ExtensionsInput() *string
```

- *Type:* *string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.pathsInput"></a>

```go
func PathsInput() *string
```

- *Type:* *string

---

##### `ProcessesInput`<sup>Optional</sup> <a name="ProcessesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.processesInput"></a>

```go
func ProcessesInput() *string
```

- *Type:* *string

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.extensions"></a>

```go
func Extensions() *string
```

- *Type:* *string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.paths"></a>

```go
func Paths() *string
```

- *Type:* *string

---

##### `Processes`<sup>Required</sup> <a name="Processes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.processes"></a>

```go
func Processes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomanageConfigurationAntimalwareExclusions
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a>

---


### AutomanageConfigurationAntimalwareOutputReference <a name="AutomanageConfigurationAntimalwareOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

automanageconfiguration.NewAutomanageConfigurationAntimalwareOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomanageConfigurationAntimalwareOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.putExclusions">PutExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetRealTimeProtectionEnabled">ResetRealTimeProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanDay">ResetScheduledScanDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanEnabled">ResetScheduledScanEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanTimeInMinutes">ResetScheduledScanTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanType">ResetScheduledScanType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusions` <a name="PutExclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.putExclusions"></a>

```go
func PutExclusions(value AutomanageConfigurationAntimalwareExclusions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.putExclusions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a>

---

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetRealTimeProtectionEnabled` <a name="ResetRealTimeProtectionEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetRealTimeProtectionEnabled"></a>

```go
func ResetRealTimeProtectionEnabled()
```

##### `ResetScheduledScanDay` <a name="ResetScheduledScanDay" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanDay"></a>

```go
func ResetScheduledScanDay()
```

##### `ResetScheduledScanEnabled` <a name="ResetScheduledScanEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanEnabled"></a>

```go
func ResetScheduledScanEnabled()
```

##### `ResetScheduledScanTimeInMinutes` <a name="ResetScheduledScanTimeInMinutes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanTimeInMinutes"></a>

```go
func ResetScheduledScanTimeInMinutes()
```

##### `ResetScheduledScanType` <a name="ResetScheduledScanType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanType"></a>

```go
func ResetScheduledScanType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.exclusions">Exclusions</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference">AutomanageConfigurationAntimalwareExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.realTimeProtectionEnabledInput">RealTimeProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanDayInput">ScheduledScanDayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanEnabledInput">ScheduledScanEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTimeInMinutesInput">ScheduledScanTimeInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTypeInput">ScheduledScanTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.realTimeProtectionEnabled">RealTimeProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanDay">ScheduledScanDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanEnabled">ScheduledScanEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTimeInMinutes">ScheduledScanTimeInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanType">ScheduledScanType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.exclusions"></a>

```go
func Exclusions() AutomanageConfigurationAntimalwareExclusionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference">AutomanageConfigurationAntimalwareExclusionsOutputReference</a>

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() AutomanageConfigurationAntimalwareExclusions
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a>

---

##### `RealTimeProtectionEnabledInput`<sup>Optional</sup> <a name="RealTimeProtectionEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.realTimeProtectionEnabledInput"></a>

```go
func RealTimeProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduledScanDayInput`<sup>Optional</sup> <a name="ScheduledScanDayInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanDayInput"></a>

```go
func ScheduledScanDayInput() *f64
```

- *Type:* *f64

---

##### `ScheduledScanEnabledInput`<sup>Optional</sup> <a name="ScheduledScanEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanEnabledInput"></a>

```go
func ScheduledScanEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduledScanTimeInMinutesInput`<sup>Optional</sup> <a name="ScheduledScanTimeInMinutesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTimeInMinutesInput"></a>

```go
func ScheduledScanTimeInMinutesInput() *f64
```

- *Type:* *f64

---

##### `ScheduledScanTypeInput`<sup>Optional</sup> <a name="ScheduledScanTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTypeInput"></a>

```go
func ScheduledScanTypeInput() *string
```

- *Type:* *string

---

##### `RealTimeProtectionEnabled`<sup>Required</sup> <a name="RealTimeProtectionEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.realTimeProtectionEnabled"></a>

```go
func RealTimeProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `ScheduledScanDay`<sup>Required</sup> <a name="ScheduledScanDay" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanDay"></a>

```go
func ScheduledScanDay() *f64
```

- *Type:* *f64

---

##### `ScheduledScanEnabled`<sup>Required</sup> <a name="ScheduledScanEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanEnabled"></a>

```go
func ScheduledScanEnabled() interface{}
```

- *Type:* interface{}

---

##### `ScheduledScanTimeInMinutes`<sup>Required</sup> <a name="ScheduledScanTimeInMinutes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTimeInMinutes"></a>

```go
func ScheduledScanTimeInMinutes() *f64
```

- *Type:* *f64

---

##### `ScheduledScanType`<sup>Required</sup> <a name="ScheduledScanType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanType"></a>

```go
func ScheduledScanType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomanageConfigurationAntimalware
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

---


### AutomanageConfigurationAzureSecurityBaselineOutputReference <a name="AutomanageConfigurationAzureSecurityBaselineOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

automanageconfiguration.NewAutomanageConfigurationAzureSecurityBaselineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomanageConfigurationAzureSecurityBaselineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resetAssignmentType">ResetAssignmentType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssignmentType` <a name="ResetAssignmentType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resetAssignmentType"></a>

```go
func ResetAssignmentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.assignmentTypeInput">AssignmentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.assignmentType">AssignmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssignmentTypeInput`<sup>Optional</sup> <a name="AssignmentTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.assignmentTypeInput"></a>

```go
func AssignmentTypeInput() *string
```

- *Type:* *string

---

##### `AssignmentType`<sup>Required</sup> <a name="AssignmentType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.assignmentType"></a>

```go
func AssignmentType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomanageConfigurationAzureSecurityBaseline
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

---


### AutomanageConfigurationBackupOutputReference <a name="AutomanageConfigurationBackupOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

automanageconfiguration.NewAutomanageConfigurationBackupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomanageConfigurationBackupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putSchedulePolicy">PutSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetInstantRpRetentionRangeInDays">ResetInstantRpRetentionRangeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetPolicyName">ResetPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetSchedulePolicy">ResetSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putRetentionPolicy"></a>

```go
func PutRetentionPolicy(value AutomanageConfigurationBackupRetentionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a>

---

##### `PutSchedulePolicy` <a name="PutSchedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putSchedulePolicy"></a>

```go
func PutSchedulePolicy(value AutomanageConfigurationBackupSchedulePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putSchedulePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a>

---

##### `ResetInstantRpRetentionRangeInDays` <a name="ResetInstantRpRetentionRangeInDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetInstantRpRetentionRangeInDays"></a>

```go
func ResetInstantRpRetentionRangeInDays()
```

##### `ResetPolicyName` <a name="ResetPolicyName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetPolicyName"></a>

```go
func ResetPolicyName()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetRetentionPolicy"></a>

```go
func ResetRetentionPolicy()
```

##### `ResetSchedulePolicy` <a name="ResetSchedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetSchedulePolicy"></a>

```go
func ResetSchedulePolicy()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference">AutomanageConfigurationBackupRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.schedulePolicy">SchedulePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference">AutomanageConfigurationBackupSchedulePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.instantRpRetentionRangeInDaysInput">InstantRpRetentionRangeInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.policyNameInput">PolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.schedulePolicyInput">SchedulePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.instantRpRetentionRangeInDays">InstantRpRetentionRangeInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.retentionPolicy"></a>

```go
func RetentionPolicy() AutomanageConfigurationBackupRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference">AutomanageConfigurationBackupRetentionPolicyOutputReference</a>

---

##### `SchedulePolicy`<sup>Required</sup> <a name="SchedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.schedulePolicy"></a>

```go
func SchedulePolicy() AutomanageConfigurationBackupSchedulePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference">AutomanageConfigurationBackupSchedulePolicyOutputReference</a>

---

##### `InstantRpRetentionRangeInDaysInput`<sup>Optional</sup> <a name="InstantRpRetentionRangeInDaysInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.instantRpRetentionRangeInDaysInput"></a>

```go
func InstantRpRetentionRangeInDaysInput() *f64
```

- *Type:* *f64

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.policyNameInput"></a>

```go
func PolicyNameInput() *string
```

- *Type:* *string

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.retentionPolicyInput"></a>

```go
func RetentionPolicyInput() AutomanageConfigurationBackupRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a>

---

##### `SchedulePolicyInput`<sup>Optional</sup> <a name="SchedulePolicyInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.schedulePolicyInput"></a>

```go
func SchedulePolicyInput() AutomanageConfigurationBackupSchedulePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `InstantRpRetentionRangeInDays`<sup>Required</sup> <a name="InstantRpRetentionRangeInDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.instantRpRetentionRangeInDays"></a>

```go
func InstantRpRetentionRangeInDays() *f64
```

- *Type:* *f64

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomanageConfigurationBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

---


### AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

automanageconfiguration.NewAutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.putRetentionDuration">PutRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resetRetentionDuration">ResetRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resetRetentionTimes">ResetRetentionTimes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetentionDuration` <a name="PutRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.putRetentionDuration"></a>

```go
func PutRetentionDuration(value AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.putRetentionDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a>

---

##### `ResetRetentionDuration` <a name="ResetRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resetRetentionDuration"></a>

```go
func ResetRetentionDuration()
```

##### `ResetRetentionTimes` <a name="ResetRetentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resetRetentionTimes"></a>

```go
func ResetRetentionTimes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionDuration">RetentionDuration</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionDurationInput">RetentionDurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionTimesInput">RetentionTimesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionTimes">RetentionTimes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionDuration`<sup>Required</sup> <a name="RetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionDuration"></a>

```go
func RetentionDuration() AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference</a>

---

##### `RetentionDurationInput`<sup>Optional</sup> <a name="RetentionDurationInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionDurationInput"></a>

```go
func RetentionDurationInput() AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a>

---

##### `RetentionTimesInput`<sup>Optional</sup> <a name="RetentionTimesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionTimesInput"></a>

```go
func RetentionTimesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RetentionTimes`<sup>Required</sup> <a name="RetentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionTimes"></a>

```go
func RetentionTimes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomanageConfigurationBackupRetentionPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a>

---


### AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

automanageconfiguration.NewAutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resetDurationType">ResetDurationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetDurationType` <a name="ResetDurationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resetDurationType"></a>

```go
func ResetDurationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.durationTypeInput">DurationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.durationType">DurationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `DurationTypeInput`<sup>Optional</sup> <a name="DurationTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.durationTypeInput"></a>

```go
func DurationTypeInput() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DurationType`<sup>Required</sup> <a name="DurationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.durationType"></a>

```go
func DurationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a>

---


### AutomanageConfigurationBackupRetentionPolicyOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

automanageconfiguration.NewAutomanageConfigurationBackupRetentionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomanageConfigurationBackupRetentionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putDailySchedule">PutDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putWeeklySchedule">PutWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetDailySchedule">ResetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetRetentionPolicyType">ResetRetentionPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetWeeklySchedule">ResetWeeklySchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDailySchedule` <a name="PutDailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putDailySchedule"></a>

```go
func PutDailySchedule(value AutomanageConfigurationBackupRetentionPolicyDailySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a>

---

##### `PutWeeklySchedule` <a name="PutWeeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putWeeklySchedule"></a>

```go
func PutWeeklySchedule(value AutomanageConfigurationBackupRetentionPolicyWeeklySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a>

---

##### `ResetDailySchedule` <a name="ResetDailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetDailySchedule"></a>

```go
func ResetDailySchedule()
```

##### `ResetRetentionPolicyType` <a name="ResetRetentionPolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetRetentionPolicyType"></a>

```go
func ResetRetentionPolicyType()
```

##### `ResetWeeklySchedule` <a name="ResetWeeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetWeeklySchedule"></a>

```go
func ResetWeeklySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference">AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.dailyScheduleInput">DailyScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.retentionPolicyTypeInput">RetentionPolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.weeklyScheduleInput">WeeklyScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.retentionPolicyType">RetentionPolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DailySchedule`<sup>Required</sup> <a name="DailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.dailySchedule"></a>

```go
func DailySchedule() AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference">AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference</a>

---

##### `WeeklySchedule`<sup>Required</sup> <a name="WeeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.weeklySchedule"></a>

```go
func WeeklySchedule() AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference</a>

---

##### `DailyScheduleInput`<sup>Optional</sup> <a name="DailyScheduleInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.dailyScheduleInput"></a>

```go
func DailyScheduleInput() AutomanageConfigurationBackupRetentionPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a>

---

##### `RetentionPolicyTypeInput`<sup>Optional</sup> <a name="RetentionPolicyTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.retentionPolicyTypeInput"></a>

```go
func RetentionPolicyTypeInput() *string
```

- *Type:* *string

---

##### `WeeklyScheduleInput`<sup>Optional</sup> <a name="WeeklyScheduleInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.weeklyScheduleInput"></a>

```go
func WeeklyScheduleInput() AutomanageConfigurationBackupRetentionPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a>

---

##### `RetentionPolicyType`<sup>Required</sup> <a name="RetentionPolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.retentionPolicyType"></a>

```go
func RetentionPolicyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomanageConfigurationBackupRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a>

---


### AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

automanageconfiguration.NewAutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.putRetentionDuration">PutRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resetRetentionDuration">ResetRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resetRetentionTimes">ResetRetentionTimes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetentionDuration` <a name="PutRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.putRetentionDuration"></a>

```go
func PutRetentionDuration(value AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.putRetentionDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a>

---

##### `ResetRetentionDuration` <a name="ResetRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resetRetentionDuration"></a>

```go
func ResetRetentionDuration()
```

##### `ResetRetentionTimes` <a name="ResetRetentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resetRetentionTimes"></a>

```go
func ResetRetentionTimes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionDuration">RetentionDuration</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionDurationInput">RetentionDurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionTimesInput">RetentionTimesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionTimes">RetentionTimes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionDuration`<sup>Required</sup> <a name="RetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionDuration"></a>

```go
func RetentionDuration() AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference</a>

---

##### `RetentionDurationInput`<sup>Optional</sup> <a name="RetentionDurationInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionDurationInput"></a>

```go
func RetentionDurationInput() AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a>

---

##### `RetentionTimesInput`<sup>Optional</sup> <a name="RetentionTimesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionTimesInput"></a>

```go
func RetentionTimesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RetentionTimes`<sup>Required</sup> <a name="RetentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionTimes"></a>

```go
func RetentionTimes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomanageConfigurationBackupRetentionPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a>

---


### AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

automanageconfiguration.NewAutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resetDurationType">ResetDurationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetDurationType` <a name="ResetDurationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resetDurationType"></a>

```go
func ResetDurationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.durationTypeInput">DurationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.durationType">DurationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `DurationTypeInput`<sup>Optional</sup> <a name="DurationTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.durationTypeInput"></a>

```go
func DurationTypeInput() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DurationType`<sup>Required</sup> <a name="DurationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.durationType"></a>

```go
func DurationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a>

---


### AutomanageConfigurationBackupSchedulePolicyOutputReference <a name="AutomanageConfigurationBackupSchedulePolicyOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

automanageconfiguration.NewAutomanageConfigurationBackupSchedulePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomanageConfigurationBackupSchedulePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetSchedulePolicyType">ResetSchedulePolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunDays">ResetScheduleRunDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunFrequency">ResetScheduleRunFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunTimes">ResetScheduleRunTimes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchedulePolicyType` <a name="ResetSchedulePolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetSchedulePolicyType"></a>

```go
func ResetSchedulePolicyType()
```

##### `ResetScheduleRunDays` <a name="ResetScheduleRunDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunDays"></a>

```go
func ResetScheduleRunDays()
```

##### `ResetScheduleRunFrequency` <a name="ResetScheduleRunFrequency" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunFrequency"></a>

```go
func ResetScheduleRunFrequency()
```

##### `ResetScheduleRunTimes` <a name="ResetScheduleRunTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunTimes"></a>

```go
func ResetScheduleRunTimes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.schedulePolicyTypeInput">SchedulePolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunDaysInput">ScheduleRunDaysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunFrequencyInput">ScheduleRunFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunTimesInput">ScheduleRunTimesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.schedulePolicyType">SchedulePolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunDays">ScheduleRunDays</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunFrequency">ScheduleRunFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunTimes">ScheduleRunTimes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchedulePolicyTypeInput`<sup>Optional</sup> <a name="SchedulePolicyTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.schedulePolicyTypeInput"></a>

```go
func SchedulePolicyTypeInput() *string
```

- *Type:* *string

---

##### `ScheduleRunDaysInput`<sup>Optional</sup> <a name="ScheduleRunDaysInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunDaysInput"></a>

```go
func ScheduleRunDaysInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScheduleRunFrequencyInput`<sup>Optional</sup> <a name="ScheduleRunFrequencyInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunFrequencyInput"></a>

```go
func ScheduleRunFrequencyInput() *string
```

- *Type:* *string

---

##### `ScheduleRunTimesInput`<sup>Optional</sup> <a name="ScheduleRunTimesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunTimesInput"></a>

```go
func ScheduleRunTimesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SchedulePolicyType`<sup>Required</sup> <a name="SchedulePolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.schedulePolicyType"></a>

```go
func SchedulePolicyType() *string
```

- *Type:* *string

---

##### `ScheduleRunDays`<sup>Required</sup> <a name="ScheduleRunDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunDays"></a>

```go
func ScheduleRunDays() *[]*string
```

- *Type:* *[]*string

---

##### `ScheduleRunFrequency`<sup>Required</sup> <a name="ScheduleRunFrequency" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunFrequency"></a>

```go
func ScheduleRunFrequency() *string
```

- *Type:* *string

---

##### `ScheduleRunTimes`<sup>Required</sup> <a name="ScheduleRunTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunTimes"></a>

```go
func ScheduleRunTimes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomanageConfigurationBackupSchedulePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a>

---


### AutomanageConfigurationTimeoutsOutputReference <a name="AutomanageConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/automanageconfiguration"

automanageconfiguration.NewAutomanageConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomanageConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



