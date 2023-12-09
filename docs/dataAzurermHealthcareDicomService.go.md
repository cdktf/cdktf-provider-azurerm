# `dataAzurermHealthcareDicomService` Submodule <a name="`dataAzurermHealthcareDicomService` Submodule" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermHealthcareDicomService <a name="DataAzurermHealthcareDicomService" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/healthcare_dicom_service azurerm_healthcare_dicom_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

dataazurermhealthcaredicomservice.NewDataAzurermHealthcareDicomService(scope Construct, id *string, config DataAzurermHealthcareDicomServiceConfig) DataAzurermHealthcareDicomService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig">DataAzurermHealthcareDicomServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig">DataAzurermHealthcareDicomServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermHealthcareDicomServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeouts">DataAzurermHealthcareDicomServiceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermHealthcareDicomService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

dataazurermhealthcaredicomservice.DataAzurermHealthcareDicomService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

dataazurermhealthcaredicomservice.DataAzurermHealthcareDicomService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

dataazurermhealthcaredicomservice.DataAzurermHealthcareDicomService_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

dataazurermhealthcaredicomservice.DataAzurermHealthcareDicomService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermHealthcareDicomService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermHealthcareDicomService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermHealthcareDicomService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/healthcare_dicom_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermHealthcareDicomService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList">DataAzurermHealthcareDicomServiceAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList">DataAzurermHealthcareDicomServiceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.privateEndpoint">PrivateEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList">DataAzurermHealthcareDicomServicePrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.serviceUrl">ServiceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference">DataAzurermHealthcareDicomServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.authentication"></a>

```go
func Authentication() DataAzurermHealthcareDicomServiceAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList">DataAzurermHealthcareDicomServiceAuthenticationList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.identity"></a>

```go
func Identity() DataAzurermHealthcareDicomServiceIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList">DataAzurermHealthcareDicomServiceIdentityList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.privateEndpoint"></a>

```go
func PrivateEndpoint() DataAzurermHealthcareDicomServicePrivateEndpointList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList">DataAzurermHealthcareDicomServicePrivateEndpointList</a>

---

##### `ServiceUrl`<sup>Required</sup> <a name="ServiceUrl" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.serviceUrl"></a>

```go
func ServiceUrl() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.timeouts"></a>

```go
func Timeouts() DataAzurermHealthcareDicomServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference">DataAzurermHealthcareDicomServiceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermHealthcareDicomServiceAuthentication <a name="DataAzurermHealthcareDicomServiceAuthentication" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

&dataazurermhealthcaredicomservice.DataAzurermHealthcareDicomServiceAuthentication {

}
```


### DataAzurermHealthcareDicomServiceConfig <a name="DataAzurermHealthcareDicomServiceConfig" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

&dataazurermhealthcaredicomservice.DataAzurermHealthcareDicomServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	WorkspaceId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/healthcare_dicom_service#name DataAzurermHealthcareDicomService#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/healthcare_dicom_service#workspace_id DataAzurermHealthcareDicomService#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/healthcare_dicom_service#id DataAzurermHealthcareDicomService#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeouts">DataAzurermHealthcareDicomServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/healthcare_dicom_service#name DataAzurermHealthcareDicomService#name}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/healthcare_dicom_service#workspace_id DataAzurermHealthcareDicomService#workspace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/healthcare_dicom_service#id DataAzurermHealthcareDicomService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceConfig.property.timeouts"></a>

```go
Timeouts DataAzurermHealthcareDicomServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeouts">DataAzurermHealthcareDicomServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/healthcare_dicom_service#timeouts DataAzurermHealthcareDicomService#timeouts}

---

### DataAzurermHealthcareDicomServiceIdentity <a name="DataAzurermHealthcareDicomServiceIdentity" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

&dataazurermhealthcaredicomservice.DataAzurermHealthcareDicomServiceIdentity {

}
```


### DataAzurermHealthcareDicomServicePrivateEndpoint <a name="DataAzurermHealthcareDicomServicePrivateEndpoint" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

&dataazurermhealthcaredicomservice.DataAzurermHealthcareDicomServicePrivateEndpoint {

}
```


### DataAzurermHealthcareDicomServiceTimeouts <a name="DataAzurermHealthcareDicomServiceTimeouts" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

&dataazurermhealthcaredicomservice.DataAzurermHealthcareDicomServiceTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/healthcare_dicom_service#read DataAzurermHealthcareDicomService#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/healthcare_dicom_service#read DataAzurermHealthcareDicomService#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermHealthcareDicomServiceAuthenticationList <a name="DataAzurermHealthcareDicomServiceAuthenticationList" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

dataazurermhealthcaredicomservice.NewDataAzurermHealthcareDicomServiceAuthenticationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermHealthcareDicomServiceAuthenticationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.get"></a>

```go
func Get(index *f64) DataAzurermHealthcareDicomServiceAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermHealthcareDicomServiceAuthenticationOutputReference <a name="DataAzurermHealthcareDicomServiceAuthenticationOutputReference" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

dataazurermhealthcaredicomservice.NewDataAzurermHealthcareDicomServiceAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermHealthcareDicomServiceAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.property.audience">Audience</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.property.authority">Authority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthentication">DataAzurermHealthcareDicomServiceAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.property.audience"></a>

```go
func Audience() *[]*string
```

- *Type:* *[]*string

---

##### `Authority`<sup>Required</sup> <a name="Authority" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.property.authority"></a>

```go
func Authority() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermHealthcareDicomServiceAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceAuthentication">DataAzurermHealthcareDicomServiceAuthentication</a>

---


### DataAzurermHealthcareDicomServiceIdentityList <a name="DataAzurermHealthcareDicomServiceIdentityList" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

dataazurermhealthcaredicomservice.NewDataAzurermHealthcareDicomServiceIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermHealthcareDicomServiceIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.get"></a>

```go
func Get(index *f64) DataAzurermHealthcareDicomServiceIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermHealthcareDicomServiceIdentityOutputReference <a name="DataAzurermHealthcareDicomServiceIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

dataazurermhealthcaredicomservice.NewDataAzurermHealthcareDicomServiceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermHealthcareDicomServiceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentity">DataAzurermHealthcareDicomServiceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermHealthcareDicomServiceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceIdentity">DataAzurermHealthcareDicomServiceIdentity</a>

---


### DataAzurermHealthcareDicomServicePrivateEndpointList <a name="DataAzurermHealthcareDicomServicePrivateEndpointList" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

dataazurermhealthcaredicomservice.NewDataAzurermHealthcareDicomServicePrivateEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermHealthcareDicomServicePrivateEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.get"></a>

```go
func Get(index *f64) DataAzurermHealthcareDicomServicePrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermHealthcareDicomServicePrivateEndpointOutputReference <a name="DataAzurermHealthcareDicomServicePrivateEndpointOutputReference" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

dataazurermhealthcaredicomservice.NewDataAzurermHealthcareDicomServicePrivateEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermHealthcareDicomServicePrivateEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpoint">DataAzurermHealthcareDicomServicePrivateEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermHealthcareDicomServicePrivateEndpoint
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServicePrivateEndpoint">DataAzurermHealthcareDicomServicePrivateEndpoint</a>

---


### DataAzurermHealthcareDicomServiceTimeoutsOutputReference <a name="DataAzurermHealthcareDicomServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermhealthcaredicomservice"

dataazurermhealthcaredicomservice.NewDataAzurermHealthcareDicomServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermHealthcareDicomServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermHealthcareDicomService.DataAzurermHealthcareDicomServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



