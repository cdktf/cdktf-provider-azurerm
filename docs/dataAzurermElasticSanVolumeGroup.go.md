# `dataAzurermElasticSanVolumeGroup` Submodule <a name="`dataAzurermElasticSanVolumeGroup` Submodule" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermElasticSanVolumeGroup <a name="DataAzurermElasticSanVolumeGroup" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/elastic_san_volume_group azurerm_elastic_san_volume_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

dataazurermelasticsanvolumegroup.NewDataAzurermElasticSanVolumeGroup(scope Construct, id *string, config DataAzurermElasticSanVolumeGroupConfig) DataAzurermElasticSanVolumeGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig">DataAzurermElasticSanVolumeGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig">DataAzurermElasticSanVolumeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermElasticSanVolumeGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermElasticSanVolumeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

dataazurermelasticsanvolumegroup.DataAzurermElasticSanVolumeGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

dataazurermelasticsanvolumegroup.DataAzurermElasticSanVolumeGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

dataazurermelasticsanvolumegroup.DataAzurermElasticSanVolumeGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

dataazurermelasticsanvolumegroup.DataAzurermElasticSanVolumeGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermElasticSanVolumeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermElasticSanVolumeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermElasticSanVolumeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/elastic_san_volume_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermElasticSanVolumeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList">DataAzurermElasticSanVolumeGroupEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList">DataAzurermElasticSanVolumeGroupIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.networkRule">NetworkRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList">DataAzurermElasticSanVolumeGroupNetworkRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.protocolType">ProtocolType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference">DataAzurermElasticSanVolumeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.elasticSanIdInput">ElasticSanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.elasticSanId">ElasticSanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.encryption"></a>

```go
func Encryption() DataAzurermElasticSanVolumeGroupEncryptionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList">DataAzurermElasticSanVolumeGroupEncryptionList</a>

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.identity"></a>

```go
func Identity() DataAzurermElasticSanVolumeGroupIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList">DataAzurermElasticSanVolumeGroupIdentityList</a>

---

##### `NetworkRule`<sup>Required</sup> <a name="NetworkRule" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.networkRule"></a>

```go
func NetworkRule() DataAzurermElasticSanVolumeGroupNetworkRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList">DataAzurermElasticSanVolumeGroupNetworkRuleList</a>

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.protocolType"></a>

```go
func ProtocolType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.timeouts"></a>

```go
func Timeouts() DataAzurermElasticSanVolumeGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference">DataAzurermElasticSanVolumeGroupTimeoutsOutputReference</a>

---

##### `ElasticSanIdInput`<sup>Optional</sup> <a name="ElasticSanIdInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.elasticSanIdInput"></a>

```go
func ElasticSanIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ElasticSanId`<sup>Required</sup> <a name="ElasticSanId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.elasticSanId"></a>

```go
func ElasticSanId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermElasticSanVolumeGroupConfig <a name="DataAzurermElasticSanVolumeGroupConfig" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

&dataazurermelasticsanvolumegroup.DataAzurermElasticSanVolumeGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ElasticSanId: *string,
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.elasticSanId">ElasticSanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/elastic_san_volume_group#elastic_san_id DataAzurermElasticSanVolumeGroup#elastic_san_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/elastic_san_volume_group#name DataAzurermElasticSanVolumeGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/elastic_san_volume_group#id DataAzurermElasticSanVolumeGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ElasticSanId`<sup>Required</sup> <a name="ElasticSanId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.elasticSanId"></a>

```go
ElasticSanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/elastic_san_volume_group#elastic_san_id DataAzurermElasticSanVolumeGroup#elastic_san_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/elastic_san_volume_group#name DataAzurermElasticSanVolumeGroup#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/elastic_san_volume_group#id DataAzurermElasticSanVolumeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.timeouts"></a>

```go
Timeouts DataAzurermElasticSanVolumeGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/elastic_san_volume_group#timeouts DataAzurermElasticSanVolumeGroup#timeouts}

---

### DataAzurermElasticSanVolumeGroupEncryption <a name="DataAzurermElasticSanVolumeGroupEncryption" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

&dataazurermelasticsanvolumegroup.DataAzurermElasticSanVolumeGroupEncryption {

}
```


### DataAzurermElasticSanVolumeGroupIdentity <a name="DataAzurermElasticSanVolumeGroupIdentity" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

&dataazurermelasticsanvolumegroup.DataAzurermElasticSanVolumeGroupIdentity {

}
```


### DataAzurermElasticSanVolumeGroupNetworkRule <a name="DataAzurermElasticSanVolumeGroupNetworkRule" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

&dataazurermelasticsanvolumegroup.DataAzurermElasticSanVolumeGroupNetworkRule {

}
```


### DataAzurermElasticSanVolumeGroupTimeouts <a name="DataAzurermElasticSanVolumeGroupTimeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

&dataazurermelasticsanvolumegroup.DataAzurermElasticSanVolumeGroupTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/elastic_san_volume_group#read DataAzurermElasticSanVolumeGroup#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/elastic_san_volume_group#read DataAzurermElasticSanVolumeGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermElasticSanVolumeGroupEncryptionList <a name="DataAzurermElasticSanVolumeGroupEncryptionList" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

dataazurermelasticsanvolumegroup.NewDataAzurermElasticSanVolumeGroupEncryptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermElasticSanVolumeGroupEncryptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.get"></a>

```go
func Get(index *f64) DataAzurermElasticSanVolumeGroupEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermElasticSanVolumeGroupEncryptionOutputReference <a name="DataAzurermElasticSanVolumeGroupEncryptionOutputReference" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

dataazurermelasticsanvolumegroup.NewDataAzurermElasticSanVolumeGroupEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermElasticSanVolumeGroupEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyExpirationTimestamp">CurrentVersionedKeyExpirationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyId">CurrentVersionedKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.lastKeyRotationTimestamp">LastKeyRotationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryption">DataAzurermElasticSanVolumeGroupEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentVersionedKeyExpirationTimestamp`<sup>Required</sup> <a name="CurrentVersionedKeyExpirationTimestamp" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyExpirationTimestamp"></a>

```go
func CurrentVersionedKeyExpirationTimestamp() *string
```

- *Type:* *string

---

##### `CurrentVersionedKeyId`<sup>Required</sup> <a name="CurrentVersionedKeyId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyId"></a>

```go
func CurrentVersionedKeyId() *string
```

- *Type:* *string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyId"></a>

```go
func KeyVaultKeyId() *string
```

- *Type:* *string

---

##### `LastKeyRotationTimestamp`<sup>Required</sup> <a name="LastKeyRotationTimestamp" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.lastKeyRotationTimestamp"></a>

```go
func LastKeyRotationTimestamp() *string
```

- *Type:* *string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityId"></a>

```go
func UserAssignedIdentityId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermElasticSanVolumeGroupEncryption
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryption">DataAzurermElasticSanVolumeGroupEncryption</a>

---


### DataAzurermElasticSanVolumeGroupIdentityList <a name="DataAzurermElasticSanVolumeGroupIdentityList" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

dataazurermelasticsanvolumegroup.NewDataAzurermElasticSanVolumeGroupIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermElasticSanVolumeGroupIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.get"></a>

```go
func Get(index *f64) DataAzurermElasticSanVolumeGroupIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermElasticSanVolumeGroupIdentityOutputReference <a name="DataAzurermElasticSanVolumeGroupIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

dataazurermelasticsanvolumegroup.NewDataAzurermElasticSanVolumeGroupIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermElasticSanVolumeGroupIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentity">DataAzurermElasticSanVolumeGroupIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermElasticSanVolumeGroupIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentity">DataAzurermElasticSanVolumeGroupIdentity</a>

---


### DataAzurermElasticSanVolumeGroupNetworkRuleList <a name="DataAzurermElasticSanVolumeGroupNetworkRuleList" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

dataazurermelasticsanvolumegroup.NewDataAzurermElasticSanVolumeGroupNetworkRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermElasticSanVolumeGroupNetworkRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.get"></a>

```go
func Get(index *f64) DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference <a name="DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

dataazurermelasticsanvolumegroup.NewDataAzurermElasticSanVolumeGroupNetworkRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRule">DataAzurermElasticSanVolumeGroupNetworkRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermElasticSanVolumeGroupNetworkRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRule">DataAzurermElasticSanVolumeGroupNetworkRule</a>

---


### DataAzurermElasticSanVolumeGroupTimeoutsOutputReference <a name="DataAzurermElasticSanVolumeGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermelasticsanvolumegroup"

dataazurermelasticsanvolumegroup.NewDataAzurermElasticSanVolumeGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermElasticSanVolumeGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



