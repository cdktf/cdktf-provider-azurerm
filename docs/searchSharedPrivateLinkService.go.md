# `azurerm_search_shared_private_link_service`

Refer to the Terraform Registory for docs: [`azurerm_search_shared_private_link_service`](https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service).

# `searchSharedPrivateLinkService` Submodule <a name="`searchSharedPrivateLinkService` Submodule" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SearchSharedPrivateLinkService <a name="SearchSharedPrivateLinkService" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service azurerm_search_shared_private_link_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/searchsharedprivatelinkservice"

searchsharedprivatelinkservice.NewSearchSharedPrivateLinkService(scope Construct, id *string, config SearchSharedPrivateLinkServiceConfig) SearchSharedPrivateLinkService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig">SearchSharedPrivateLinkServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig">SearchSharedPrivateLinkServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetRequestMessage">ResetRequestMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.putTimeouts"></a>

```go
func PutTimeouts(value SearchSharedPrivateLinkServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts">SearchSharedPrivateLinkServiceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetId"></a>

```go
func ResetId()
```

##### `ResetRequestMessage` <a name="ResetRequestMessage" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetRequestMessage"></a>

```go
func ResetRequestMessage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SearchSharedPrivateLinkService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/searchsharedprivatelinkservice"

searchsharedprivatelinkservice.SearchSharedPrivateLinkService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/searchsharedprivatelinkservice"

searchsharedprivatelinkservice.SearchSharedPrivateLinkService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/searchsharedprivatelinkservice"

searchsharedprivatelinkservice.SearchSharedPrivateLinkService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/searchsharedprivatelinkservice"

searchsharedprivatelinkservice.SearchSharedPrivateLinkService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SearchSharedPrivateLinkService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SearchSharedPrivateLinkService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SearchSharedPrivateLinkService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SearchSharedPrivateLinkService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference">SearchSharedPrivateLinkServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.requestMessageInput">RequestMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.searchServiceIdInput">SearchServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.subresourceNameInput">SubresourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.requestMessage">RequestMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.searchServiceId">SearchServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.subresourceName">SubresourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.timeouts"></a>

```go
func Timeouts() SearchSharedPrivateLinkServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference">SearchSharedPrivateLinkServiceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequestMessageInput`<sup>Optional</sup> <a name="RequestMessageInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.requestMessageInput"></a>

```go
func RequestMessageInput() *string
```

- *Type:* *string

---

##### `SearchServiceIdInput`<sup>Optional</sup> <a name="SearchServiceIdInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.searchServiceIdInput"></a>

```go
func SearchServiceIdInput() *string
```

- *Type:* *string

---

##### `SubresourceNameInput`<sup>Optional</sup> <a name="SubresourceNameInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.subresourceNameInput"></a>

```go
func SubresourceNameInput() *string
```

- *Type:* *string

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.targetResourceIdInput"></a>

```go
func TargetResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RequestMessage`<sup>Required</sup> <a name="RequestMessage" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.requestMessage"></a>

```go
func RequestMessage() *string
```

- *Type:* *string

---

##### `SearchServiceId`<sup>Required</sup> <a name="SearchServiceId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.searchServiceId"></a>

```go
func SearchServiceId() *string
```

- *Type:* *string

---

##### `SubresourceName`<sup>Required</sup> <a name="SubresourceName" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.subresourceName"></a>

```go
func SubresourceName() *string
```

- *Type:* *string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.targetResourceId"></a>

```go
func TargetResourceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SearchSharedPrivateLinkServiceConfig <a name="SearchSharedPrivateLinkServiceConfig" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/searchsharedprivatelinkservice"

&searchsharedprivatelinkservice.SearchSharedPrivateLinkServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SearchServiceId: *string,
	SubresourceName: *string,
	TargetResourceId: *string,
	Id: *string,
	RequestMessage: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#name SearchSharedPrivateLinkService#name}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.searchServiceId">SearchServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#search_service_id SearchSharedPrivateLinkService#search_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.subresourceName">SubresourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#subresource_name SearchSharedPrivateLinkService#subresource_name}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#target_resource_id SearchSharedPrivateLinkService#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#id SearchSharedPrivateLinkService#id}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.requestMessage">RequestMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#request_message SearchSharedPrivateLinkService#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts">SearchSharedPrivateLinkServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#name SearchSharedPrivateLinkService#name}.

---

##### `SearchServiceId`<sup>Required</sup> <a name="SearchServiceId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.searchServiceId"></a>

```go
SearchServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#search_service_id SearchSharedPrivateLinkService#search_service_id}.

---

##### `SubresourceName`<sup>Required</sup> <a name="SubresourceName" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.subresourceName"></a>

```go
SubresourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#subresource_name SearchSharedPrivateLinkService#subresource_name}.

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.targetResourceId"></a>

```go
TargetResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#target_resource_id SearchSharedPrivateLinkService#target_resource_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#id SearchSharedPrivateLinkService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RequestMessage`<sup>Optional</sup> <a name="RequestMessage" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.requestMessage"></a>

```go
RequestMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#request_message SearchSharedPrivateLinkService#request_message}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.timeouts"></a>

```go
Timeouts SearchSharedPrivateLinkServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts">SearchSharedPrivateLinkServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#timeouts SearchSharedPrivateLinkService#timeouts}

---

### SearchSharedPrivateLinkServiceTimeouts <a name="SearchSharedPrivateLinkServiceTimeouts" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/searchsharedprivatelinkservice"

&searchsharedprivatelinkservice.SearchSharedPrivateLinkServiceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#create SearchSharedPrivateLinkService#create}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#delete SearchSharedPrivateLinkService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#read SearchSharedPrivateLinkService#read}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#update SearchSharedPrivateLinkService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#create SearchSharedPrivateLinkService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#delete SearchSharedPrivateLinkService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#read SearchSharedPrivateLinkService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/search_shared_private_link_service#update SearchSharedPrivateLinkService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SearchSharedPrivateLinkServiceTimeoutsOutputReference <a name="SearchSharedPrivateLinkServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/searchsharedprivatelinkservice"

searchsharedprivatelinkservice.NewSearchSharedPrivateLinkServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SearchSharedPrivateLinkServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



