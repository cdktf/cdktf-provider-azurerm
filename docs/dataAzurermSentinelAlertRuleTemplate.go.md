# `dataAzurermSentinelAlertRuleTemplate` Submodule <a name="`dataAzurermSentinelAlertRuleTemplate` Submodule" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSentinelAlertRuleTemplate <a name="DataAzurermSentinelAlertRuleTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/sentinel_alert_rule_template azurerm_sentinel_alert_rule_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

dataazurermsentinelalertruletemplate.NewDataAzurermSentinelAlertRuleTemplate(scope Construct, id *string, config DataAzurermSentinelAlertRuleTemplateConfig) DataAzurermSentinelAlertRuleTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig">DataAzurermSentinelAlertRuleTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig">DataAzurermSentinelAlertRuleTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermSentinelAlertRuleTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts">DataAzurermSentinelAlertRuleTemplateTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetName"></a>

```go
func ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermSentinelAlertRuleTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

dataazurermsentinelalertruletemplate.DataAzurermSentinelAlertRuleTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

dataazurermsentinelalertruletemplate.DataAzurermSentinelAlertRuleTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

dataazurermsentinelalertruletemplate.DataAzurermSentinelAlertRuleTemplate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

dataazurermsentinelalertruletemplate.DataAzurermSentinelAlertRuleTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermSentinelAlertRuleTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermSentinelAlertRuleTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermSentinelAlertRuleTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/sentinel_alert_rule_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermSentinelAlertRuleTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.nrtTemplate">NrtTemplate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList">DataAzurermSentinelAlertRuleTemplateNrtTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.scheduledTemplate">ScheduledTemplate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList">DataAzurermSentinelAlertRuleTemplateScheduledTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.securityIncidentTemplate">SecurityIncidentTemplate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList">DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference">DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `NrtTemplate`<sup>Required</sup> <a name="NrtTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.nrtTemplate"></a>

```go
func NrtTemplate() DataAzurermSentinelAlertRuleTemplateNrtTemplateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList">DataAzurermSentinelAlertRuleTemplateNrtTemplateList</a>

---

##### `ScheduledTemplate`<sup>Required</sup> <a name="ScheduledTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.scheduledTemplate"></a>

```go
func ScheduledTemplate() DataAzurermSentinelAlertRuleTemplateScheduledTemplateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList">DataAzurermSentinelAlertRuleTemplateScheduledTemplateList</a>

---

##### `SecurityIncidentTemplate`<sup>Required</sup> <a name="SecurityIncidentTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.securityIncidentTemplate"></a>

```go
func SecurityIncidentTemplate() DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList">DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.timeouts"></a>

```go
func Timeouts() DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference">DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSentinelAlertRuleTemplateConfig <a name="DataAzurermSentinelAlertRuleTemplateConfig" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

&dataazurermsentinelalertruletemplate.DataAzurermSentinelAlertRuleTemplateConfig {
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
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/sentinel_alert_rule_template#log_analytics_workspace_id DataAzurermSentinelAlertRuleTemplate#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/sentinel_alert_rule_template#display_name DataAzurermSentinelAlertRuleTemplate#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/sentinel_alert_rule_template#id DataAzurermSentinelAlertRuleTemplate#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/sentinel_alert_rule_template#name DataAzurermSentinelAlertRuleTemplate#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts">DataAzurermSentinelAlertRuleTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/sentinel_alert_rule_template#log_analytics_workspace_id DataAzurermSentinelAlertRuleTemplate#log_analytics_workspace_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/sentinel_alert_rule_template#display_name DataAzurermSentinelAlertRuleTemplate#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/sentinel_alert_rule_template#id DataAzurermSentinelAlertRuleTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/sentinel_alert_rule_template#name DataAzurermSentinelAlertRuleTemplate#name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.timeouts"></a>

```go
Timeouts DataAzurermSentinelAlertRuleTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts">DataAzurermSentinelAlertRuleTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/sentinel_alert_rule_template#timeouts DataAzurermSentinelAlertRuleTemplate#timeouts}

---

### DataAzurermSentinelAlertRuleTemplateNrtTemplate <a name="DataAzurermSentinelAlertRuleTemplateNrtTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

&dataazurermsentinelalertruletemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplate {

}
```


### DataAzurermSentinelAlertRuleTemplateScheduledTemplate <a name="DataAzurermSentinelAlertRuleTemplateScheduledTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

&dataazurermsentinelalertruletemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplate {

}
```


### DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate <a name="DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

&dataazurermsentinelalertruletemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate {

}
```


### DataAzurermSentinelAlertRuleTemplateTimeouts <a name="DataAzurermSentinelAlertRuleTemplateTimeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

&dataazurermsentinelalertruletemplate.DataAzurermSentinelAlertRuleTemplateTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/sentinel_alert_rule_template#read DataAzurermSentinelAlertRuleTemplate#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/sentinel_alert_rule_template#read DataAzurermSentinelAlertRuleTemplate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSentinelAlertRuleTemplateNrtTemplateList <a name="DataAzurermSentinelAlertRuleTemplateNrtTemplateList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

dataazurermsentinelalertruletemplate.NewDataAzurermSentinelAlertRuleTemplateNrtTemplateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermSentinelAlertRuleTemplateNrtTemplateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.get"></a>

```go
func Get(index *f64) DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference <a name="DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

dataazurermsentinelalertruletemplate.NewDataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.tactics">Tactics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplate">DataAzurermSentinelAlertRuleTemplateNrtTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `Tactics`<sup>Required</sup> <a name="Tactics" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.tactics"></a>

```go
func Tactics() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermSentinelAlertRuleTemplateNrtTemplate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplate">DataAzurermSentinelAlertRuleTemplateNrtTemplate</a>

---


### DataAzurermSentinelAlertRuleTemplateScheduledTemplateList <a name="DataAzurermSentinelAlertRuleTemplateScheduledTemplateList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

dataazurermsentinelalertruletemplate.NewDataAzurermSentinelAlertRuleTemplateScheduledTemplateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermSentinelAlertRuleTemplateScheduledTemplateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.get"></a>

```go
func Get(index *f64) DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference <a name="DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

dataazurermsentinelalertruletemplate.NewDataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.queryFrequency">QueryFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.queryPeriod">QueryPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.tactics">Tactics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.triggerOperator">TriggerOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.triggerThreshold">TriggerThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplate">DataAzurermSentinelAlertRuleTemplateScheduledTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `QueryFrequency`<sup>Required</sup> <a name="QueryFrequency" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.queryFrequency"></a>

```go
func QueryFrequency() *string
```

- *Type:* *string

---

##### `QueryPeriod`<sup>Required</sup> <a name="QueryPeriod" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.queryPeriod"></a>

```go
func QueryPeriod() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `Tactics`<sup>Required</sup> <a name="Tactics" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.tactics"></a>

```go
func Tactics() *[]*string
```

- *Type:* *[]*string

---

##### `TriggerOperator`<sup>Required</sup> <a name="TriggerOperator" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.triggerOperator"></a>

```go
func TriggerOperator() *string
```

- *Type:* *string

---

##### `TriggerThreshold`<sup>Required</sup> <a name="TriggerThreshold" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.triggerThreshold"></a>

```go
func TriggerThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermSentinelAlertRuleTemplateScheduledTemplate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplate">DataAzurermSentinelAlertRuleTemplateScheduledTemplate</a>

---


### DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList <a name="DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

dataazurermsentinelalertruletemplate.NewDataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.get"></a>

```go
func Get(index *f64) DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference <a name="DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

dataazurermsentinelalertruletemplate.NewDataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.productFilter">ProductFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate">DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ProductFilter`<sup>Required</sup> <a name="ProductFilter" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.productFilter"></a>

```go
func ProductFilter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate">DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate</a>

---


### DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference <a name="DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/dataazurermsentinelalertruletemplate"

dataazurermsentinelalertruletemplate.NewDataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



