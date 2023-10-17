# `azurerm_api_management_notification_recipient_email`

Refer to the Terraform Registory for docs: [`azurerm_api_management_notification_recipient_email`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email).

# `apiManagementNotificationRecipientEmail` Submodule <a name="`apiManagementNotificationRecipientEmail` Submodule" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementNotificationRecipientEmail <a name="ApiManagementNotificationRecipientEmail" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email azurerm_api_management_notification_recipient_email}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/apimanagementnotificationrecipientemail"

apimanagementnotificationrecipientemail.NewApiManagementNotificationRecipientEmail(scope Construct, id *string, config ApiManagementNotificationRecipientEmailConfig) ApiManagementNotificationRecipientEmail
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig">ApiManagementNotificationRecipientEmailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig">ApiManagementNotificationRecipientEmailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.putTimeouts"></a>

```go
func PutTimeouts(value ApiManagementNotificationRecipientEmailTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementNotificationRecipientEmail resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/apimanagementnotificationrecipientemail"

apimanagementnotificationrecipientemail.ApiManagementNotificationRecipientEmail_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/apimanagementnotificationrecipientemail"

apimanagementnotificationrecipientemail.ApiManagementNotificationRecipientEmail_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/apimanagementnotificationrecipientemail"

apimanagementnotificationrecipientemail.ApiManagementNotificationRecipientEmail_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/apimanagementnotificationrecipientemail"

apimanagementnotificationrecipientemail.ApiManagementNotificationRecipientEmail_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApiManagementNotificationRecipientEmail resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiManagementNotificationRecipientEmail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiManagementNotificationRecipientEmail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementNotificationRecipientEmail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference">ApiManagementNotificationRecipientEmailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.apiManagementIdInput">ApiManagementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.notificationTypeInput">NotificationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.apiManagementId">ApiManagementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.notificationType">NotificationType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.timeouts"></a>

```go
func Timeouts() ApiManagementNotificationRecipientEmailTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference">ApiManagementNotificationRecipientEmailTimeoutsOutputReference</a>

---

##### `ApiManagementIdInput`<sup>Optional</sup> <a name="ApiManagementIdInput" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.apiManagementIdInput"></a>

```go
func ApiManagementIdInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NotificationTypeInput`<sup>Optional</sup> <a name="NotificationTypeInput" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.notificationTypeInput"></a>

```go
func NotificationTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiManagementId`<sup>Required</sup> <a name="ApiManagementId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.apiManagementId"></a>

```go
func ApiManagementId() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.notificationType"></a>

```go
func NotificationType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementNotificationRecipientEmailConfig <a name="ApiManagementNotificationRecipientEmailConfig" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/apimanagementnotificationrecipientemail"

&apimanagementnotificationrecipientemail.ApiManagementNotificationRecipientEmailConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiManagementId: *string,
	Email: *string,
	NotificationType: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.apiManagementId">ApiManagementId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email#api_management_id ApiManagementNotificationRecipientEmail#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email#email ApiManagementNotificationRecipientEmail#email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.notificationType">NotificationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email#notification_type ApiManagementNotificationRecipientEmail#notification_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email#id ApiManagementNotificationRecipientEmail#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiManagementId`<sup>Required</sup> <a name="ApiManagementId" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.apiManagementId"></a>

```go
ApiManagementId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email#api_management_id ApiManagementNotificationRecipientEmail#api_management_id}.

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email#email ApiManagementNotificationRecipientEmail#email}.

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.notificationType"></a>

```go
NotificationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email#notification_type ApiManagementNotificationRecipientEmail#notification_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email#id ApiManagementNotificationRecipientEmail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.timeouts"></a>

```go
Timeouts ApiManagementNotificationRecipientEmailTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email#timeouts ApiManagementNotificationRecipientEmail#timeouts}

---

### ApiManagementNotificationRecipientEmailTimeouts <a name="ApiManagementNotificationRecipientEmailTimeouts" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/apimanagementnotificationrecipientemail"

&apimanagementnotificationrecipientemail.ApiManagementNotificationRecipientEmailTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email#create ApiManagementNotificationRecipientEmail#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email#delete ApiManagementNotificationRecipientEmail#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email#read ApiManagementNotificationRecipientEmail#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email#create ApiManagementNotificationRecipientEmail#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email#delete ApiManagementNotificationRecipientEmail#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_notification_recipient_email#read ApiManagementNotificationRecipientEmail#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementNotificationRecipientEmailTimeoutsOutputReference <a name="ApiManagementNotificationRecipientEmailTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/apimanagementnotificationrecipientemail"

apimanagementnotificationrecipientemail.NewApiManagementNotificationRecipientEmailTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementNotificationRecipientEmailTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



