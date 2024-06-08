# `dataAzurermMonitorScheduledQueryRulesAlert` Submodule <a name="`dataAzurermMonitorScheduledQueryRulesAlert` Submodule" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMonitorScheduledQueryRulesAlert <a name="DataAzurermMonitorScheduledQueryRulesAlert" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/monitor_scheduled_query_rules_alert azurerm_monitor_scheduled_query_rules_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

dataazurermmonitorscheduledqueryrulesalert.NewDataAzurermMonitorScheduledQueryRulesAlert(scope Construct, id *string, config DataAzurermMonitorScheduledQueryRulesAlertConfig) DataAzurermMonitorScheduledQueryRulesAlert
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig">DataAzurermMonitorScheduledQueryRulesAlertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig">DataAzurermMonitorScheduledQueryRulesAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermMonitorScheduledQueryRulesAlertTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts">DataAzurermMonitorScheduledQueryRulesAlertTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMonitorScheduledQueryRulesAlert resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

dataazurermmonitorscheduledqueryrulesalert.DataAzurermMonitorScheduledQueryRulesAlert_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

dataazurermmonitorscheduledqueryrulesalert.DataAzurermMonitorScheduledQueryRulesAlert_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

dataazurermmonitorscheduledqueryrulesalert.DataAzurermMonitorScheduledQueryRulesAlert_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

dataazurermmonitorscheduledqueryrulesalert.DataAzurermMonitorScheduledQueryRulesAlert_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermMonitorScheduledQueryRulesAlert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermMonitorScheduledQueryRulesAlert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermMonitorScheduledQueryRulesAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/monitor_scheduled_query_rules_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMonitorScheduledQueryRulesAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList">DataAzurermMonitorScheduledQueryRulesAlertActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.authorizedResourceIds">AuthorizedResourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.frequency">Frequency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.queryType">QueryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.severity">Severity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.throttling">Throttling</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference">DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeWindow">TimeWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList">DataAzurermMonitorScheduledQueryRulesAlertTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.action"></a>

```go
func Action() DataAzurermMonitorScheduledQueryRulesAlertActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList">DataAzurermMonitorScheduledQueryRulesAlertActionList</a>

---

##### `AuthorizedResourceIds`<sup>Required</sup> <a name="AuthorizedResourceIds" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.authorizedResourceIds"></a>

```go
func AuthorizedResourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.frequency"></a>

```go
func Frequency() *f64
```

- *Type:* *f64

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `QueryType`<sup>Required</sup> <a name="QueryType" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.queryType"></a>

```go
func QueryType() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.severity"></a>

```go
func Severity() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Throttling`<sup>Required</sup> <a name="Throttling" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.throttling"></a>

```go
func Throttling() *f64
```

- *Type:* *f64

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeouts"></a>

```go
func Timeouts() DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference">DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference</a>

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeWindow"></a>

```go
func TimeWindow() *f64
```

- *Type:* *f64

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.trigger"></a>

```go
func Trigger() DataAzurermMonitorScheduledQueryRulesAlertTriggerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList">DataAzurermMonitorScheduledQueryRulesAlertTriggerList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMonitorScheduledQueryRulesAlertAction <a name="DataAzurermMonitorScheduledQueryRulesAlertAction" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

&dataazurermmonitorscheduledqueryrulesalert.DataAzurermMonitorScheduledQueryRulesAlertAction {

}
```


### DataAzurermMonitorScheduledQueryRulesAlertConfig <a name="DataAzurermMonitorScheduledQueryRulesAlertConfig" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

&dataazurermmonitorscheduledqueryrulesalert.DataAzurermMonitorScheduledQueryRulesAlertConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/monitor_scheduled_query_rules_alert#name DataAzurermMonitorScheduledQueryRulesAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/monitor_scheduled_query_rules_alert#resource_group_name DataAzurermMonitorScheduledQueryRulesAlert#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/monitor_scheduled_query_rules_alert#id DataAzurermMonitorScheduledQueryRulesAlert#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts">DataAzurermMonitorScheduledQueryRulesAlertTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/monitor_scheduled_query_rules_alert#name DataAzurermMonitorScheduledQueryRulesAlert#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/monitor_scheduled_query_rules_alert#resource_group_name DataAzurermMonitorScheduledQueryRulesAlert#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/monitor_scheduled_query_rules_alert#id DataAzurermMonitorScheduledQueryRulesAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.timeouts"></a>

```go
Timeouts DataAzurermMonitorScheduledQueryRulesAlertTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts">DataAzurermMonitorScheduledQueryRulesAlertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/monitor_scheduled_query_rules_alert#timeouts DataAzurermMonitorScheduledQueryRulesAlert#timeouts}

---

### DataAzurermMonitorScheduledQueryRulesAlertTimeouts <a name="DataAzurermMonitorScheduledQueryRulesAlertTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

&dataazurermmonitorscheduledqueryrulesalert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/monitor_scheduled_query_rules_alert#read DataAzurermMonitorScheduledQueryRulesAlert#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/monitor_scheduled_query_rules_alert#read DataAzurermMonitorScheduledQueryRulesAlert#read}.

---

### DataAzurermMonitorScheduledQueryRulesAlertTrigger <a name="DataAzurermMonitorScheduledQueryRulesAlertTrigger" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

&dataazurermmonitorscheduledqueryrulesalert.DataAzurermMonitorScheduledQueryRulesAlertTrigger {

}
```


### DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger <a name="DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

&dataazurermmonitorscheduledqueryrulesalert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMonitorScheduledQueryRulesAlertActionList <a name="DataAzurermMonitorScheduledQueryRulesAlertActionList" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

dataazurermmonitorscheduledqueryrulesalert.NewDataAzurermMonitorScheduledQueryRulesAlertActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermMonitorScheduledQueryRulesAlertActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.get"></a>

```go
func Get(index *f64) DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference <a name="DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

dataazurermmonitorscheduledqueryrulesalert.NewDataAzurermMonitorScheduledQueryRulesAlertActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.actionGroup">ActionGroup</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.customWebhookPayload">CustomWebhookPayload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.emailSubject">EmailSubject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertAction">DataAzurermMonitorScheduledQueryRulesAlertAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionGroup`<sup>Required</sup> <a name="ActionGroup" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.actionGroup"></a>

```go
func ActionGroup() *[]*string
```

- *Type:* *[]*string

---

##### `CustomWebhookPayload`<sup>Required</sup> <a name="CustomWebhookPayload" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.customWebhookPayload"></a>

```go
func CustomWebhookPayload() *string
```

- *Type:* *string

---

##### `EmailSubject`<sup>Required</sup> <a name="EmailSubject" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.emailSubject"></a>

```go
func EmailSubject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermMonitorScheduledQueryRulesAlertAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertAction">DataAzurermMonitorScheduledQueryRulesAlertAction</a>

---


### DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference <a name="DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

dataazurermmonitorscheduledqueryrulesalert.NewDataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAzurermMonitorScheduledQueryRulesAlertTriggerList <a name="DataAzurermMonitorScheduledQueryRulesAlertTriggerList" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

dataazurermmonitorscheduledqueryrulesalert.NewDataAzurermMonitorScheduledQueryRulesAlertTriggerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermMonitorScheduledQueryRulesAlertTriggerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.get"></a>

```go
func Get(index *f64) DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList <a name="DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

dataazurermmonitorscheduledqueryrulesalert.NewDataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.get"></a>

```go
func Get(index *f64) DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference <a name="DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

dataazurermmonitorscheduledqueryrulesalert.NewDataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricColumn">MetricColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricTriggerType">MetricTriggerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger">DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricColumn`<sup>Required</sup> <a name="MetricColumn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricColumn"></a>

```go
func MetricColumn() *string
```

- *Type:* *string

---

##### `MetricTriggerType`<sup>Required</sup> <a name="MetricTriggerType" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricTriggerType"></a>

```go
func MetricTriggerType() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger">DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger</a>

---


### DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference <a name="DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmonitorscheduledqueryrulesalert"

dataazurermmonitorscheduledqueryrulesalert.NewDataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.metricTrigger">MetricTrigger</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList">DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTrigger">DataAzurermMonitorScheduledQueryRulesAlertTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricTrigger`<sup>Required</sup> <a name="MetricTrigger" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.metricTrigger"></a>

```go
func MetricTrigger() DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList">DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermMonitorScheduledQueryRulesAlertTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTrigger">DataAzurermMonitorScheduledQueryRulesAlertTrigger</a>

---



