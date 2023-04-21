# `azurerm_application_insights_workbook_template`

Refer to the Terraform Registory for docs: [`azurerm_application_insights_workbook_template`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template).

# `applicationInsightsWorkbookTemplate` Submodule <a name="`applicationInsightsWorkbookTemplate` Submodule" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsWorkbookTemplate <a name="ApplicationInsightsWorkbookTemplate" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template azurerm_application_insights_workbook_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightsworkbooktemplate"

applicationinsightsworkbooktemplate.NewApplicationInsightsWorkbookTemplate(scope Construct, id *string, config ApplicationInsightsWorkbookTemplateConfig) ApplicationInsightsWorkbookTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig">ApplicationInsightsWorkbookTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig">ApplicationInsightsWorkbookTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putGalleries">PutGalleries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetAuthor">ResetAuthor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetLocalized">ResetLocalized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGalleries` <a name="PutGalleries" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putGalleries"></a>

```go
func PutGalleries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putGalleries.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putTimeouts"></a>

```go
func PutTimeouts(value ApplicationInsightsWorkbookTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts">ApplicationInsightsWorkbookTemplateTimeouts</a>

---

##### `ResetAuthor` <a name="ResetAuthor" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetAuthor"></a>

```go
func ResetAuthor()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetLocalized` <a name="ResetLocalized" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetLocalized"></a>

```go
func ResetLocalized()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightsworkbooktemplate"

applicationinsightsworkbooktemplate.ApplicationInsightsWorkbookTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightsworkbooktemplate"

applicationinsightsworkbooktemplate.ApplicationInsightsWorkbookTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightsworkbooktemplate"

applicationinsightsworkbooktemplate.ApplicationInsightsWorkbookTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.galleries">Galleries</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList">ApplicationInsightsWorkbookTemplateGalleriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference">ApplicationInsightsWorkbookTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.authorInput">AuthorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.galleriesInput">GalleriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.localizedInput">LocalizedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.templateDataInput">TemplateDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.author">Author</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.localized">Localized</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.templateData">TemplateData</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Galleries`<sup>Required</sup> <a name="Galleries" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.galleries"></a>

```go
func Galleries() ApplicationInsightsWorkbookTemplateGalleriesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList">ApplicationInsightsWorkbookTemplateGalleriesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.timeouts"></a>

```go
func Timeouts() ApplicationInsightsWorkbookTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference">ApplicationInsightsWorkbookTemplateTimeoutsOutputReference</a>

---

##### `AuthorInput`<sup>Optional</sup> <a name="AuthorInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.authorInput"></a>

```go
func AuthorInput() *string
```

- *Type:* *string

---

##### `GalleriesInput`<sup>Optional</sup> <a name="GalleriesInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.galleriesInput"></a>

```go
func GalleriesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalizedInput`<sup>Optional</sup> <a name="LocalizedInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.localizedInput"></a>

```go
func LocalizedInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TemplateDataInput`<sup>Optional</sup> <a name="TemplateDataInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.templateDataInput"></a>

```go
func TemplateDataInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.author"></a>

```go
func Author() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Localized`<sup>Required</sup> <a name="Localized" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.localized"></a>

```go
func Localized() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TemplateData`<sup>Required</sup> <a name="TemplateData" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.templateData"></a>

```go
func TemplateData() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsWorkbookTemplateConfig <a name="ApplicationInsightsWorkbookTemplateConfig" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightsworkbooktemplate"

&applicationinsightsworkbooktemplate.ApplicationInsightsWorkbookTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Galleries: interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	TemplateData: *string,
	Author: *string,
	Id: *string,
	Localized: *string,
	Priority: *f64,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.galleries">Galleries</a></code> | <code>interface{}</code> | galleries block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#location ApplicationInsightsWorkbookTemplate#location}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#name ApplicationInsightsWorkbookTemplate#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#resource_group_name ApplicationInsightsWorkbookTemplate#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.templateData">TemplateData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#template_data ApplicationInsightsWorkbookTemplate#template_data}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.author">Author</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#author ApplicationInsightsWorkbookTemplate#author}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#id ApplicationInsightsWorkbookTemplate#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.localized">Localized</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#localized ApplicationInsightsWorkbookTemplate#localized}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#priority ApplicationInsightsWorkbookTemplate#priority}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#tags ApplicationInsightsWorkbookTemplate#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts">ApplicationInsightsWorkbookTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Galleries`<sup>Required</sup> <a name="Galleries" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.galleries"></a>

```go
Galleries interface{}
```

- *Type:* interface{}

galleries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#galleries ApplicationInsightsWorkbookTemplate#galleries}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#location ApplicationInsightsWorkbookTemplate#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#name ApplicationInsightsWorkbookTemplate#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#resource_group_name ApplicationInsightsWorkbookTemplate#resource_group_name}.

---

##### `TemplateData`<sup>Required</sup> <a name="TemplateData" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.templateData"></a>

```go
TemplateData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#template_data ApplicationInsightsWorkbookTemplate#template_data}.

---

##### `Author`<sup>Optional</sup> <a name="Author" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.author"></a>

```go
Author *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#author ApplicationInsightsWorkbookTemplate#author}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#id ApplicationInsightsWorkbookTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Localized`<sup>Optional</sup> <a name="Localized" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.localized"></a>

```go
Localized *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#localized ApplicationInsightsWorkbookTemplate#localized}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#priority ApplicationInsightsWorkbookTemplate#priority}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#tags ApplicationInsightsWorkbookTemplate#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.timeouts"></a>

```go
Timeouts ApplicationInsightsWorkbookTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts">ApplicationInsightsWorkbookTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#timeouts ApplicationInsightsWorkbookTemplate#timeouts}

---

### ApplicationInsightsWorkbookTemplateGalleries <a name="ApplicationInsightsWorkbookTemplateGalleries" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightsworkbooktemplate"

&applicationinsightsworkbooktemplate.ApplicationInsightsWorkbookTemplateGalleries {
	Category: *string,
	Name: *string,
	Order: *f64,
	ResourceType: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#category ApplicationInsightsWorkbookTemplate#category}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#name ApplicationInsightsWorkbookTemplate#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.order">Order</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#order ApplicationInsightsWorkbookTemplate#order}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#resource_type ApplicationInsightsWorkbookTemplate#resource_type}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#type ApplicationInsightsWorkbookTemplate#type}. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#category ApplicationInsightsWorkbookTemplate#category}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#name ApplicationInsightsWorkbookTemplate#name}.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#order ApplicationInsightsWorkbookTemplate#order}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#resource_type ApplicationInsightsWorkbookTemplate#resource_type}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#type ApplicationInsightsWorkbookTemplate#type}.

---

### ApplicationInsightsWorkbookTemplateTimeouts <a name="ApplicationInsightsWorkbookTemplateTimeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightsworkbooktemplate"

&applicationinsightsworkbooktemplate.ApplicationInsightsWorkbookTemplateTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#create ApplicationInsightsWorkbookTemplate#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#delete ApplicationInsightsWorkbookTemplate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#read ApplicationInsightsWorkbookTemplate#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#update ApplicationInsightsWorkbookTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#create ApplicationInsightsWorkbookTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#delete ApplicationInsightsWorkbookTemplate#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#read ApplicationInsightsWorkbookTemplate#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/application_insights_workbook_template#update ApplicationInsightsWorkbookTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsWorkbookTemplateGalleriesList <a name="ApplicationInsightsWorkbookTemplateGalleriesList" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightsworkbooktemplate"

applicationinsightsworkbooktemplate.NewApplicationInsightsWorkbookTemplateGalleriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApplicationInsightsWorkbookTemplateGalleriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.get"></a>

```go
func Get(index *f64) ApplicationInsightsWorkbookTemplateGalleriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationInsightsWorkbookTemplateGalleriesOutputReference <a name="ApplicationInsightsWorkbookTemplateGalleriesOutputReference" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightsworkbooktemplate"

applicationinsightsworkbooktemplate.NewApplicationInsightsWorkbookTemplateGalleriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApplicationInsightsWorkbookTemplateGalleriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetResourceType"></a>

```go
func ResetResourceType()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationInsightsWorkbookTemplateTimeoutsOutputReference <a name="ApplicationInsightsWorkbookTemplateTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightsworkbooktemplate"

applicationinsightsworkbooktemplate.NewApplicationInsightsWorkbookTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationInsightsWorkbookTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



