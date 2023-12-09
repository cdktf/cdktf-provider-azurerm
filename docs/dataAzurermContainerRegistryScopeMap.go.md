# `dataAzurermContainerRegistryScopeMap` Submodule <a name="`dataAzurermContainerRegistryScopeMap` Submodule" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermContainerRegistryScopeMap <a name="DataAzurermContainerRegistryScopeMap" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/container_registry_scope_map azurerm_container_registry_scope_map}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermcontainerregistryscopemap"

dataazurermcontainerregistryscopemap.NewDataAzurermContainerRegistryScopeMap(scope Construct, id *string, config DataAzurermContainerRegistryScopeMapConfig) DataAzurermContainerRegistryScopeMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig">DataAzurermContainerRegistryScopeMapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig">DataAzurermContainerRegistryScopeMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermContainerRegistryScopeMapTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts">DataAzurermContainerRegistryScopeMapTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermContainerRegistryScopeMap resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermcontainerregistryscopemap"

dataazurermcontainerregistryscopemap.DataAzurermContainerRegistryScopeMap_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermcontainerregistryscopemap"

dataazurermcontainerregistryscopemap.DataAzurermContainerRegistryScopeMap_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermcontainerregistryscopemap"

dataazurermcontainerregistryscopemap.DataAzurermContainerRegistryScopeMap_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermcontainerregistryscopemap"

dataazurermcontainerregistryscopemap.DataAzurermContainerRegistryScopeMap_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermContainerRegistryScopeMap resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermContainerRegistryScopeMap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermContainerRegistryScopeMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/container_registry_scope_map#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermContainerRegistryScopeMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference">DataAzurermContainerRegistryScopeMapTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.containerRegistryNameInput">ContainerRegistryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.containerRegistryName">ContainerRegistryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.timeouts"></a>

```go
func Timeouts() DataAzurermContainerRegistryScopeMapTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference">DataAzurermContainerRegistryScopeMapTimeoutsOutputReference</a>

---

##### `ContainerRegistryNameInput`<sup>Optional</sup> <a name="ContainerRegistryNameInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.containerRegistryNameInput"></a>

```go
func ContainerRegistryNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerRegistryName`<sup>Required</sup> <a name="ContainerRegistryName" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.containerRegistryName"></a>

```go
func ContainerRegistryName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermContainerRegistryScopeMapConfig <a name="DataAzurermContainerRegistryScopeMapConfig" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermcontainerregistryscopemap"

&dataazurermcontainerregistryscopemap.DataAzurermContainerRegistryScopeMapConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerRegistryName: *string,
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.containerRegistryName">ContainerRegistryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/container_registry_scope_map#container_registry_name DataAzurermContainerRegistryScopeMap#container_registry_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/container_registry_scope_map#name DataAzurermContainerRegistryScopeMap#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/container_registry_scope_map#resource_group_name DataAzurermContainerRegistryScopeMap#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/container_registry_scope_map#id DataAzurermContainerRegistryScopeMap#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts">DataAzurermContainerRegistryScopeMapTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerRegistryName`<sup>Required</sup> <a name="ContainerRegistryName" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.containerRegistryName"></a>

```go
ContainerRegistryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/container_registry_scope_map#container_registry_name DataAzurermContainerRegistryScopeMap#container_registry_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/container_registry_scope_map#name DataAzurermContainerRegistryScopeMap#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/container_registry_scope_map#resource_group_name DataAzurermContainerRegistryScopeMap#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/container_registry_scope_map#id DataAzurermContainerRegistryScopeMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.timeouts"></a>

```go
Timeouts DataAzurermContainerRegistryScopeMapTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts">DataAzurermContainerRegistryScopeMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/container_registry_scope_map#timeouts DataAzurermContainerRegistryScopeMap#timeouts}

---

### DataAzurermContainerRegistryScopeMapTimeouts <a name="DataAzurermContainerRegistryScopeMapTimeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermcontainerregistryscopemap"

&dataazurermcontainerregistryscopemap.DataAzurermContainerRegistryScopeMapTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/container_registry_scope_map#read DataAzurermContainerRegistryScopeMap#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/container_registry_scope_map#read DataAzurermContainerRegistryScopeMap#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermContainerRegistryScopeMapTimeoutsOutputReference <a name="DataAzurermContainerRegistryScopeMapTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermcontainerregistryscopemap"

dataazurermcontainerregistryscopemap.NewDataAzurermContainerRegistryScopeMapTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermContainerRegistryScopeMapTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



