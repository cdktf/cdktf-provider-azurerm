# `dataAzurermTrafficManagerProfile` Submodule <a name="`dataAzurermTrafficManagerProfile` Submodule" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermTrafficManagerProfile <a name="DataAzurermTrafficManagerProfile" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/traffic_manager_profile azurerm_traffic_manager_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

dataazurermtrafficmanagerprofile.NewDataAzurermTrafficManagerProfile(scope Construct, id *string, config DataAzurermTrafficManagerProfileConfig) DataAzurermTrafficManagerProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig">DataAzurermTrafficManagerProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig">DataAzurermTrafficManagerProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.resetTrafficViewEnabled">ResetTrafficViewEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermTrafficManagerProfileTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeouts">DataAzurermTrafficManagerProfileTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTrafficViewEnabled` <a name="ResetTrafficViewEnabled" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.resetTrafficViewEnabled"></a>

```go
func ResetTrafficViewEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermTrafficManagerProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

dataazurermtrafficmanagerprofile.DataAzurermTrafficManagerProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

dataazurermtrafficmanagerprofile.DataAzurermTrafficManagerProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

dataazurermtrafficmanagerprofile.DataAzurermTrafficManagerProfile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

dataazurermtrafficmanagerprofile.DataAzurermTrafficManagerProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermTrafficManagerProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermTrafficManagerProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermTrafficManagerProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/traffic_manager_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermTrafficManagerProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.dnsConfig">DnsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList">DataAzurermTrafficManagerProfileDnsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.monitorConfig">MonitorConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList">DataAzurermTrafficManagerProfileMonitorConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.profileStatus">ProfileStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference">DataAzurermTrafficManagerProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.trafficRoutingMethod">TrafficRoutingMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.trafficViewEnabledInput">TrafficViewEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.trafficViewEnabled">TrafficViewEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DnsConfig`<sup>Required</sup> <a name="DnsConfig" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.dnsConfig"></a>

```go
func DnsConfig() DataAzurermTrafficManagerProfileDnsConfigList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList">DataAzurermTrafficManagerProfileDnsConfigList</a>

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `MonitorConfig`<sup>Required</sup> <a name="MonitorConfig" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.monitorConfig"></a>

```go
func MonitorConfig() DataAzurermTrafficManagerProfileMonitorConfigList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList">DataAzurermTrafficManagerProfileMonitorConfigList</a>

---

##### `ProfileStatus`<sup>Required</sup> <a name="ProfileStatus" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.profileStatus"></a>

```go
func ProfileStatus() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.timeouts"></a>

```go
func Timeouts() DataAzurermTrafficManagerProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference">DataAzurermTrafficManagerProfileTimeoutsOutputReference</a>

---

##### `TrafficRoutingMethod`<sup>Required</sup> <a name="TrafficRoutingMethod" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.trafficRoutingMethod"></a>

```go
func TrafficRoutingMethod() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficViewEnabledInput`<sup>Optional</sup> <a name="TrafficViewEnabledInput" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.trafficViewEnabledInput"></a>

```go
func TrafficViewEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TrafficViewEnabled`<sup>Required</sup> <a name="TrafficViewEnabled" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.trafficViewEnabled"></a>

```go
func TrafficViewEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermTrafficManagerProfileConfig <a name="DataAzurermTrafficManagerProfileConfig" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

&dataazurermtrafficmanagerprofile.DataAzurermTrafficManagerProfileConfig {
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
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeouts,
	TrafficViewEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/traffic_manager_profile#name DataAzurermTrafficManagerProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/traffic_manager_profile#resource_group_name DataAzurermTrafficManagerProfile#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/traffic_manager_profile#id DataAzurermTrafficManagerProfile#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/traffic_manager_profile#tags DataAzurermTrafficManagerProfile#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeouts">DataAzurermTrafficManagerProfileTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.trafficViewEnabled">TrafficViewEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/traffic_manager_profile#traffic_view_enabled DataAzurermTrafficManagerProfile#traffic_view_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/traffic_manager_profile#name DataAzurermTrafficManagerProfile#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/traffic_manager_profile#resource_group_name DataAzurermTrafficManagerProfile#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/traffic_manager_profile#id DataAzurermTrafficManagerProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/traffic_manager_profile#tags DataAzurermTrafficManagerProfile#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.timeouts"></a>

```go
Timeouts DataAzurermTrafficManagerProfileTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeouts">DataAzurermTrafficManagerProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/traffic_manager_profile#timeouts DataAzurermTrafficManagerProfile#timeouts}

---

##### `TrafficViewEnabled`<sup>Optional</sup> <a name="TrafficViewEnabled" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileConfig.property.trafficViewEnabled"></a>

```go
TrafficViewEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/traffic_manager_profile#traffic_view_enabled DataAzurermTrafficManagerProfile#traffic_view_enabled}.

---

### DataAzurermTrafficManagerProfileDnsConfig <a name="DataAzurermTrafficManagerProfileDnsConfig" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

&dataazurermtrafficmanagerprofile.DataAzurermTrafficManagerProfileDnsConfig {

}
```


### DataAzurermTrafficManagerProfileMonitorConfig <a name="DataAzurermTrafficManagerProfileMonitorConfig" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

&dataazurermtrafficmanagerprofile.DataAzurermTrafficManagerProfileMonitorConfig {

}
```


### DataAzurermTrafficManagerProfileMonitorConfigCustomHeader <a name="DataAzurermTrafficManagerProfileMonitorConfigCustomHeader" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

&dataazurermtrafficmanagerprofile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeader {

}
```


### DataAzurermTrafficManagerProfileTimeouts <a name="DataAzurermTrafficManagerProfileTimeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

&dataazurermtrafficmanagerprofile.DataAzurermTrafficManagerProfileTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/traffic_manager_profile#read DataAzurermTrafficManagerProfile#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/traffic_manager_profile#read DataAzurermTrafficManagerProfile#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermTrafficManagerProfileDnsConfigList <a name="DataAzurermTrafficManagerProfileDnsConfigList" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

dataazurermtrafficmanagerprofile.NewDataAzurermTrafficManagerProfileDnsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermTrafficManagerProfileDnsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.get"></a>

```go
func Get(index *f64) DataAzurermTrafficManagerProfileDnsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermTrafficManagerProfileDnsConfigOutputReference <a name="DataAzurermTrafficManagerProfileDnsConfigOutputReference" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

dataazurermtrafficmanagerprofile.NewDataAzurermTrafficManagerProfileDnsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermTrafficManagerProfileDnsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.property.relativeName">RelativeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfig">DataAzurermTrafficManagerProfileDnsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RelativeName`<sup>Required</sup> <a name="RelativeName" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.property.relativeName"></a>

```go
func RelativeName() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermTrafficManagerProfileDnsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileDnsConfig">DataAzurermTrafficManagerProfileDnsConfig</a>

---


### DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList <a name="DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

dataazurermtrafficmanagerprofile.NewDataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.get"></a>

```go
func Get(index *f64) DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference <a name="DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

dataazurermtrafficmanagerprofile.NewDataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeader">DataAzurermTrafficManagerProfileMonitorConfigCustomHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermTrafficManagerProfileMonitorConfigCustomHeader
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeader">DataAzurermTrafficManagerProfileMonitorConfigCustomHeader</a>

---


### DataAzurermTrafficManagerProfileMonitorConfigList <a name="DataAzurermTrafficManagerProfileMonitorConfigList" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

dataazurermtrafficmanagerprofile.NewDataAzurermTrafficManagerProfileMonitorConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermTrafficManagerProfileMonitorConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.get"></a>

```go
func Get(index *f64) DataAzurermTrafficManagerProfileMonitorConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermTrafficManagerProfileMonitorConfigOutputReference <a name="DataAzurermTrafficManagerProfileMonitorConfigOutputReference" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

dataazurermtrafficmanagerprofile.NewDataAzurermTrafficManagerProfileMonitorConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermTrafficManagerProfileMonitorConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.customHeader">CustomHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList">DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.expectedStatusCodeRanges">ExpectedStatusCodeRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.toleratedNumberOfFailures">ToleratedNumberOfFailures</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfig">DataAzurermTrafficManagerProfileMonitorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomHeader`<sup>Required</sup> <a name="CustomHeader" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.customHeader"></a>

```go
func CustomHeader() DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList">DataAzurermTrafficManagerProfileMonitorConfigCustomHeaderList</a>

---

##### `ExpectedStatusCodeRanges`<sup>Required</sup> <a name="ExpectedStatusCodeRanges" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.expectedStatusCodeRanges"></a>

```go
func ExpectedStatusCodeRanges() *[]*string
```

- *Type:* *[]*string

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.intervalInSeconds"></a>

```go
func IntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `ToleratedNumberOfFailures`<sup>Required</sup> <a name="ToleratedNumberOfFailures" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.toleratedNumberOfFailures"></a>

```go
func ToleratedNumberOfFailures() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermTrafficManagerProfileMonitorConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileMonitorConfig">DataAzurermTrafficManagerProfileMonitorConfig</a>

---


### DataAzurermTrafficManagerProfileTimeoutsOutputReference <a name="DataAzurermTrafficManagerProfileTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermtrafficmanagerprofile"

dataazurermtrafficmanagerprofile.NewDataAzurermTrafficManagerProfileTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermTrafficManagerProfileTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerProfile.DataAzurermTrafficManagerProfileTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



