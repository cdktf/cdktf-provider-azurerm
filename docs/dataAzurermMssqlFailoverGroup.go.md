# `dataAzurermMssqlFailoverGroup` Submodule <a name="`dataAzurermMssqlFailoverGroup` Submodule" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMssqlFailoverGroup <a name="DataAzurermMssqlFailoverGroup" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mssql_failover_group azurerm_mssql_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermmssqlfailovergroup"

dataazurermmssqlfailovergroup.NewDataAzurermMssqlFailoverGroup(scope Construct, id *string, config DataAzurermMssqlFailoverGroupConfig) DataAzurermMssqlFailoverGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig">DataAzurermMssqlFailoverGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig">DataAzurermMssqlFailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermMssqlFailoverGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeouts">DataAzurermMssqlFailoverGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMssqlFailoverGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermmssqlfailovergroup"

dataazurermmssqlfailovergroup.DataAzurermMssqlFailoverGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermmssqlfailovergroup"

dataazurermmssqlfailovergroup.DataAzurermMssqlFailoverGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermmssqlfailovergroup"

dataazurermmssqlfailovergroup.DataAzurermMssqlFailoverGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermmssqlfailovergroup"

dataazurermmssqlfailovergroup.DataAzurermMssqlFailoverGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermMssqlFailoverGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermMssqlFailoverGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermMssqlFailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mssql_failover_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMssqlFailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.databases">Databases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.partnerServer">PartnerServer</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList">DataAzurermMssqlFailoverGroupPartnerServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled">ReadonlyEndpointFailoverPolicyEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.readWriteEndpointFailoverPolicy">ReadWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList">DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference">DataAzurermMssqlFailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.serverIdInput">ServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.serverId">ServerId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Databases`<sup>Required</sup> <a name="Databases" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.databases"></a>

```go
func Databases() *[]*string
```

- *Type:* *[]*string

---

##### `PartnerServer`<sup>Required</sup> <a name="PartnerServer" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.partnerServer"></a>

```go
func PartnerServer() DataAzurermMssqlFailoverGroupPartnerServerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList">DataAzurermMssqlFailoverGroupPartnerServerList</a>

---

##### `ReadonlyEndpointFailoverPolicyEnabled`<sup>Required</sup> <a name="ReadonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled"></a>

```go
func ReadonlyEndpointFailoverPolicyEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ReadWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="ReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.readWriteEndpointFailoverPolicy"></a>

```go
func ReadWriteEndpointFailoverPolicy() DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList">DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.timeouts"></a>

```go
func Timeouts() DataAzurermMssqlFailoverGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference">DataAzurermMssqlFailoverGroupTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.serverIdInput"></a>

```go
func ServerIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.serverId"></a>

```go
func ServerId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMssqlFailoverGroupConfig <a name="DataAzurermMssqlFailoverGroupConfig" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermmssqlfailovergroup"

&dataazurermmssqlfailovergroup.DataAzurermMssqlFailoverGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ServerId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mssql_failover_group#name DataAzurermMssqlFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.serverId">ServerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mssql_failover_group#server_id DataAzurermMssqlFailoverGroup#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mssql_failover_group#id DataAzurermMssqlFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeouts">DataAzurermMssqlFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mssql_failover_group#name DataAzurermMssqlFailoverGroup#name}.

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.serverId"></a>

```go
ServerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mssql_failover_group#server_id DataAzurermMssqlFailoverGroup#server_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mssql_failover_group#id DataAzurermMssqlFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupConfig.property.timeouts"></a>

```go
Timeouts DataAzurermMssqlFailoverGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeouts">DataAzurermMssqlFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mssql_failover_group#timeouts DataAzurermMssqlFailoverGroup#timeouts}

---

### DataAzurermMssqlFailoverGroupPartnerServer <a name="DataAzurermMssqlFailoverGroupPartnerServer" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermmssqlfailovergroup"

&dataazurermmssqlfailovergroup.DataAzurermMssqlFailoverGroupPartnerServer {

}
```


### DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy <a name="DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermmssqlfailovergroup"

&dataazurermmssqlfailovergroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy {

}
```


### DataAzurermMssqlFailoverGroupTimeouts <a name="DataAzurermMssqlFailoverGroupTimeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermmssqlfailovergroup"

&dataazurermmssqlfailovergroup.DataAzurermMssqlFailoverGroupTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mssql_failover_group#read DataAzurermMssqlFailoverGroup#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mssql_failover_group#read DataAzurermMssqlFailoverGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMssqlFailoverGroupPartnerServerList <a name="DataAzurermMssqlFailoverGroupPartnerServerList" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermmssqlfailovergroup"

dataazurermmssqlfailovergroup.NewDataAzurermMssqlFailoverGroupPartnerServerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermMssqlFailoverGroupPartnerServerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.get"></a>

```go
func Get(index *f64) DataAzurermMssqlFailoverGroupPartnerServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermMssqlFailoverGroupPartnerServerOutputReference <a name="DataAzurermMssqlFailoverGroupPartnerServerOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermmssqlfailovergroup"

dataazurermmssqlfailovergroup.NewDataAzurermMssqlFailoverGroupPartnerServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermMssqlFailoverGroupPartnerServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServer">DataAzurermMssqlFailoverGroupPartnerServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermMssqlFailoverGroupPartnerServer
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupPartnerServer">DataAzurermMssqlFailoverGroupPartnerServer</a>

---


### DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList <a name="DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermmssqlfailovergroup"

dataazurermmssqlfailovergroup.NewDataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.get"></a>

```go
func Get(index *f64) DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference <a name="DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermmssqlfailovergroup"

dataazurermmssqlfailovergroup.NewDataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes">GraceMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy">DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GraceMinutes`<sup>Required</sup> <a name="GraceMinutes" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes"></a>

```go
func GraceMinutes() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy">DataAzurermMssqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

---


### DataAzurermMssqlFailoverGroupTimeoutsOutputReference <a name="DataAzurermMssqlFailoverGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermmssqlfailovergroup"

dataazurermmssqlfailovergroup.NewDataAzurermMssqlFailoverGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermMssqlFailoverGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMssqlFailoverGroup.DataAzurermMssqlFailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



