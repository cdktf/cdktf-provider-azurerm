# `dataAzurermActiveDirectoryDomainService` Submodule <a name="`dataAzurermActiveDirectoryDomainService` Submodule" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermActiveDirectoryDomainService <a name="DataAzurermActiveDirectoryDomainService" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/active_directory_domain_service azurerm_active_directory_domain_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

dataazurermactivedirectorydomainservice.NewDataAzurermActiveDirectoryDomainService(scope Construct, id *string, config DataAzurermActiveDirectoryDomainServiceConfig) DataAzurermActiveDirectoryDomainService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig">DataAzurermActiveDirectoryDomainServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig">DataAzurermActiveDirectoryDomainServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermActiveDirectoryDomainServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts">DataAzurermActiveDirectoryDomainServiceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermActiveDirectoryDomainService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

dataazurermactivedirectorydomainservice.DataAzurermActiveDirectoryDomainService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

dataazurermactivedirectorydomainservice.DataAzurermActiveDirectoryDomainService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

dataazurermactivedirectorydomainservice.DataAzurermActiveDirectoryDomainService_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

dataazurermactivedirectorydomainservice.DataAzurermActiveDirectoryDomainService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermActiveDirectoryDomainService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermActiveDirectoryDomainService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermActiveDirectoryDomainService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/active_directory_domain_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermActiveDirectoryDomainService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.domainConfigurationType">DomainConfigurationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.filteredSyncEnabled">FilteredSyncEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.notifications">Notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList">DataAzurermActiveDirectoryDomainServiceNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.replicaSets">ReplicaSets</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList">DataAzurermActiveDirectoryDomainServiceReplicaSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.secureLdap">SecureLdap</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList">DataAzurermActiveDirectoryDomainServiceSecureLdapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.security">Security</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList">DataAzurermActiveDirectoryDomainServiceSecurityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.syncOwner">SyncOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference">DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `DomainConfigurationType`<sup>Required</sup> <a name="DomainConfigurationType" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.domainConfigurationType"></a>

```go
func DomainConfigurationType() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `FilteredSyncEnabled`<sup>Required</sup> <a name="FilteredSyncEnabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.filteredSyncEnabled"></a>

```go
func FilteredSyncEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.notifications"></a>

```go
func Notifications() DataAzurermActiveDirectoryDomainServiceNotificationsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList">DataAzurermActiveDirectoryDomainServiceNotificationsList</a>

---

##### `ReplicaSets`<sup>Required</sup> <a name="ReplicaSets" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.replicaSets"></a>

```go
func ReplicaSets() DataAzurermActiveDirectoryDomainServiceReplicaSetsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList">DataAzurermActiveDirectoryDomainServiceReplicaSetsList</a>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `SecureLdap`<sup>Required</sup> <a name="SecureLdap" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.secureLdap"></a>

```go
func SecureLdap() DataAzurermActiveDirectoryDomainServiceSecureLdapList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList">DataAzurermActiveDirectoryDomainServiceSecureLdapList</a>

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.security"></a>

```go
func Security() DataAzurermActiveDirectoryDomainServiceSecurityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList">DataAzurermActiveDirectoryDomainServiceSecurityList</a>

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `SyncOwner`<sup>Required</sup> <a name="SyncOwner" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.syncOwner"></a>

```go
func SyncOwner() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.timeouts"></a>

```go
func Timeouts() DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference">DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermActiveDirectoryDomainServiceConfig <a name="DataAzurermActiveDirectoryDomainServiceConfig" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

&dataazurermactivedirectorydomainservice.DataAzurermActiveDirectoryDomainServiceConfig {
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
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/active_directory_domain_service#name DataAzurermActiveDirectoryDomainService#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/active_directory_domain_service#resource_group_name DataAzurermActiveDirectoryDomainService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/active_directory_domain_service#id DataAzurermActiveDirectoryDomainService#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/active_directory_domain_service#tags DataAzurermActiveDirectoryDomainService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts">DataAzurermActiveDirectoryDomainServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/active_directory_domain_service#name DataAzurermActiveDirectoryDomainService#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/active_directory_domain_service#resource_group_name DataAzurermActiveDirectoryDomainService#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/active_directory_domain_service#id DataAzurermActiveDirectoryDomainService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/active_directory_domain_service#tags DataAzurermActiveDirectoryDomainService#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.timeouts"></a>

```go
Timeouts DataAzurermActiveDirectoryDomainServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts">DataAzurermActiveDirectoryDomainServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/active_directory_domain_service#timeouts DataAzurermActiveDirectoryDomainService#timeouts}

---

### DataAzurermActiveDirectoryDomainServiceNotifications <a name="DataAzurermActiveDirectoryDomainServiceNotifications" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

&dataazurermactivedirectorydomainservice.DataAzurermActiveDirectoryDomainServiceNotifications {

}
```


### DataAzurermActiveDirectoryDomainServiceReplicaSets <a name="DataAzurermActiveDirectoryDomainServiceReplicaSets" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

&dataazurermactivedirectorydomainservice.DataAzurermActiveDirectoryDomainServiceReplicaSets {

}
```


### DataAzurermActiveDirectoryDomainServiceSecureLdap <a name="DataAzurermActiveDirectoryDomainServiceSecureLdap" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

&dataazurermactivedirectorydomainservice.DataAzurermActiveDirectoryDomainServiceSecureLdap {

}
```


### DataAzurermActiveDirectoryDomainServiceSecurity <a name="DataAzurermActiveDirectoryDomainServiceSecurity" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

&dataazurermactivedirectorydomainservice.DataAzurermActiveDirectoryDomainServiceSecurity {

}
```


### DataAzurermActiveDirectoryDomainServiceTimeouts <a name="DataAzurermActiveDirectoryDomainServiceTimeouts" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

&dataazurermactivedirectorydomainservice.DataAzurermActiveDirectoryDomainServiceTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/active_directory_domain_service#read DataAzurermActiveDirectoryDomainService#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/active_directory_domain_service#read DataAzurermActiveDirectoryDomainService#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermActiveDirectoryDomainServiceNotificationsList <a name="DataAzurermActiveDirectoryDomainServiceNotificationsList" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

dataazurermactivedirectorydomainservice.NewDataAzurermActiveDirectoryDomainServiceNotificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermActiveDirectoryDomainServiceNotificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.get"></a>

```go
func Get(index *f64) DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference <a name="DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

dataazurermactivedirectorydomainservice.NewDataAzurermActiveDirectoryDomainServiceNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdmins">NotifyDcAdmins</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdmins">NotifyGlobalAdmins</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotifications">DataAzurermActiveDirectoryDomainServiceNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipients"></a>

```go
func AdditionalRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `NotifyDcAdmins`<sup>Required</sup> <a name="NotifyDcAdmins" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdmins"></a>

```go
func NotifyDcAdmins() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NotifyGlobalAdmins`<sup>Required</sup> <a name="NotifyGlobalAdmins" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdmins"></a>

```go
func NotifyGlobalAdmins() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermActiveDirectoryDomainServiceNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotifications">DataAzurermActiveDirectoryDomainServiceNotifications</a>

---


### DataAzurermActiveDirectoryDomainServiceReplicaSetsList <a name="DataAzurermActiveDirectoryDomainServiceReplicaSetsList" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

dataazurermactivedirectorydomainservice.NewDataAzurermActiveDirectoryDomainServiceReplicaSetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermActiveDirectoryDomainServiceReplicaSetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.get"></a>

```go
func Get(index *f64) DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference <a name="DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

dataazurermactivedirectorydomainservice.NewDataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.domainControllerIpAddresses">DomainControllerIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.externalAccessIpAddress">ExternalAccessIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.serviceStatus">ServiceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSets">DataAzurermActiveDirectoryDomainServiceReplicaSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainControllerIpAddresses`<sup>Required</sup> <a name="DomainControllerIpAddresses" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.domainControllerIpAddresses"></a>

```go
func DomainControllerIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalAccessIpAddress`<sup>Required</sup> <a name="ExternalAccessIpAddress" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.externalAccessIpAddress"></a>

```go
func ExternalAccessIpAddress() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ServiceStatus`<sup>Required</sup> <a name="ServiceStatus" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.serviceStatus"></a>

```go
func ServiceStatus() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermActiveDirectoryDomainServiceReplicaSets
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSets">DataAzurermActiveDirectoryDomainServiceReplicaSets</a>

---


### DataAzurermActiveDirectoryDomainServiceSecureLdapList <a name="DataAzurermActiveDirectoryDomainServiceSecureLdapList" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

dataazurermactivedirectorydomainservice.NewDataAzurermActiveDirectoryDomainServiceSecureLdapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermActiveDirectoryDomainServiceSecureLdapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.get"></a>

```go
func Get(index *f64) DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference <a name="DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

dataazurermactivedirectorydomainservice.NewDataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateExpiry">CertificateExpiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateThumbprint">CertificateThumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabled">ExternalAccessEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.publicCertificate">PublicCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdap">DataAzurermActiveDirectoryDomainServiceSecureLdap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateExpiry`<sup>Required</sup> <a name="CertificateExpiry" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateExpiry"></a>

```go
func CertificateExpiry() *string
```

- *Type:* *string

---

##### `CertificateThumbprint`<sup>Required</sup> <a name="CertificateThumbprint" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateThumbprint"></a>

```go
func CertificateThumbprint() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExternalAccessEnabled`<sup>Required</sup> <a name="ExternalAccessEnabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabled"></a>

```go
func ExternalAccessEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PublicCertificate`<sup>Required</sup> <a name="PublicCertificate" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.publicCertificate"></a>

```go
func PublicCertificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermActiveDirectoryDomainServiceSecureLdap
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdap">DataAzurermActiveDirectoryDomainServiceSecureLdap</a>

---


### DataAzurermActiveDirectoryDomainServiceSecurityList <a name="DataAzurermActiveDirectoryDomainServiceSecurityList" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

dataazurermactivedirectorydomainservice.NewDataAzurermActiveDirectoryDomainServiceSecurityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermActiveDirectoryDomainServiceSecurityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.get"></a>

```go
func Get(index *f64) DataAzurermActiveDirectoryDomainServiceSecurityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermActiveDirectoryDomainServiceSecurityOutputReference <a name="DataAzurermActiveDirectoryDomainServiceSecurityOutputReference" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

dataazurermactivedirectorydomainservice.NewDataAzurermActiveDirectoryDomainServiceSecurityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermActiveDirectoryDomainServiceSecurityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabled">KerberosArmoringEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabled">KerberosRc4EncryptionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1Enabled">NtlmV1Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswords">SyncKerberosPasswords</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswords">SyncNtlmPasswords</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswords">SyncOnPremPasswords</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1Enabled">TlsV1Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurity">DataAzurermActiveDirectoryDomainServiceSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KerberosArmoringEnabled`<sup>Required</sup> <a name="KerberosArmoringEnabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabled"></a>

```go
func KerberosArmoringEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KerberosRc4EncryptionEnabled`<sup>Required</sup> <a name="KerberosRc4EncryptionEnabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabled"></a>

```go
func KerberosRc4EncryptionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NtlmV1Enabled`<sup>Required</sup> <a name="NtlmV1Enabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1Enabled"></a>

```go
func NtlmV1Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SyncKerberosPasswords`<sup>Required</sup> <a name="SyncKerberosPasswords" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswords"></a>

```go
func SyncKerberosPasswords() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SyncNtlmPasswords`<sup>Required</sup> <a name="SyncNtlmPasswords" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswords"></a>

```go
func SyncNtlmPasswords() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SyncOnPremPasswords`<sup>Required</sup> <a name="SyncOnPremPasswords" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswords"></a>

```go
func SyncOnPremPasswords() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TlsV1Enabled`<sup>Required</sup> <a name="TlsV1Enabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1Enabled"></a>

```go
func TlsV1Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermActiveDirectoryDomainServiceSecurity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurity">DataAzurermActiveDirectoryDomainServiceSecurity</a>

---


### DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference <a name="DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermactivedirectorydomainservice"

dataazurermactivedirectorydomainservice.NewDataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



